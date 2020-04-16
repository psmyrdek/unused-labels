const fs = require('fs');

module.exports.findUnusedLabels = async function ({ labelKeys, files }) {
  const labelsFound = [];

  files.forEach((pathToFile) => {
    const file = fs.readFileSync(pathToFile, 'utf8');

    labelKeys.forEach((labelKey) => {
      if (file.includes(labelKey)) {
        labelsFound.push(labelKey);
      }
    });
  });

  return labelKeys.filter((label) => !labelsFound.includes(label));
};
