const fs = require('fs');
const yaml = require('yaml');
const flatten = require('flat');

module.exports.buildLabelKeys = function (srcFile) {
  const file = fs.readFileSync(srcFile, 'utf8');
  const parsed = yaml.parse(file);
  return Object.keys(flatten(parsed));
};
