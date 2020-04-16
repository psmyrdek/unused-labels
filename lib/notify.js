const chalk = require('chalk');

module.exports.notify = {
  noOfLabels: (labelKeys) => {
    console.log(
      chalk.white(
        `🌍 There are ${chalk.bold(labelKeys.length)} labels in your project.`
      )
    );
  },
  extensions: (ext) => {
    console.log(
      chalk.white(
        `⚡️ Reading files with the following extensions - ${chalk.bold(ext)}`
      )
    );
  },
  filesFound: (files) => {
    console.log(
      chalk.white(
        `🔍 ${chalk.bold(
          files.length
        )} files found. Let's try to save some money!`
      )
    );
  },
  unusedLabels: (unusedLabels) => {
    console.log(
      chalk.white(
        `💥 Seems like you have ${chalk.bold(
          unusedLabels.length
        )} unused labels in your project. Storing them in ${chalk.bold(
          './unused-labels.json'
        )}`
      )
    );
  },
};
