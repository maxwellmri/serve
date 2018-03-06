//@flow
import fallback from 'express-history-api-fallback';
import express from 'express';
import minimist from "minimist";

function serve() {
  const args = minimist(process.argv.slice(2));
  const port = parseInt(args.p) || 8080;
  const directory = args._[0] || "public"
  const app = express();
  const root = `${process.cwd()}/${directory}`;
  app.use(express.static(root));
  app.use(fallback('index.html', { root }));
  app.listen(port, () => console.log(`Listening on ${port}. Serving from ${directory}`));
}

export default serve;
