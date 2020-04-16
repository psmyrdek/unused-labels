const fs = require('fs');
const {join} = require('path');
const chalk = require('chalk');
const glob = require('glob-promise');
const { buildLabelKeys } = require('./buildLabelKeys');
const { findUnusedLabels } = require('./findUnusedLabels');

module.exports.generateReport = async function ({ srcFile, dirName }) {
  const labelKeys = buildLabelKeys(srcFile);
  console.log(
    chalk.white(
      `🌍 There are ${chalk.bold(
        labelKeys.length
      )} labels in your project.`
    )
  );

  const ext = 'js,ts,jade,pug,html';
  console.log(
    chalk.white(
      `⚡️ Reading files with the following extensions - ${chalk.bold(ext)}`
    )
  );

  const files = await glob(`${dirName}/**/*.{${ext}}`);
  console.log(
    chalk.white(
      `🔍 ${chalk.bold(files.length)} files found. Let's try to save some money!`
    )
  );

  const unusedLabels = await findUnusedLabels({ labelKeys, files });
  console.log(
    chalk.white(
      `💥 Seems like you have ${chalk.bold(unusedLabels.length)} unused labels in your project. Storing them in ${chalk.bold('./unused-labels.json')}`
    )
  );
  fs.writeFileSync(join(process.cwd(), 'unused-labels.json'), JSON.stringify(unusedLabels, null, 2), {encoding: 'utf-8'})
};
