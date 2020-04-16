const fs = require('fs');
const glob = require('glob-promise');
const { join } = require('path');
const { buildLabelKeys } = require('./buildLabelKeys');
const { findUnusedLabels } = require('./findUnusedLabels');
const { notify } = require('./notify');

module.exports.generateReport = async function ({ srcFile, dirName, outDirName }) {
  const labelKeys = buildLabelKeys(srcFile);
  notify.noOfLabels(labelKeys);

  const ext = 'js,ts,jade,pug,html';
  notify.extensions(ext);

  const files = await glob(`${dirName}/**/*.{${ext}}`);
  notify.filesFound(files);

  const unusedLabels = await findUnusedLabels({ labelKeys, files });
  notify.unusedLabels(unusedLabels);

  fs.writeFileSync(
    join(outDirName, 'unused-labels.json'),
    JSON.stringify(unusedLabels, null, 2),
    { encoding: 'utf-8' }
  );
};
