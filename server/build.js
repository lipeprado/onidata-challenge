// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file
/* eslint-disable no-console */
import webpack from "webpack";
import chalk from "chalk";
import webpackConfig from "../webpack.config.prod";

process.env.NODE_ENV = "production"; // this assures the Babel dev config(for hot reloading) doesn't apply

console.log(
  chalk.magenta(
    "Gerando Bundle Minificado para produção, isso pode demorar um pouco..."
  )
);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.gray(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow("Webpack generated the following warnings: "));
    jsonStats.warnings.map(warning => console.log(warning));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log(chalk.greenBright("Seu App Está Pronto, ...let's do it!"));

  return 0;
});
