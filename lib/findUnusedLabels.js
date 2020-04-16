const fs = require('fs');

function processFileAndLabel(labelsFound, label, file) {
  // Exact match
  if (file.includes(label)) {
    labelsFound.push(label);
    return;
  }

  // Enums (months, days, ranges, etc.)
  if (label.split('.').length > 2) {
    const indexOfDot = label.lastIndexOf('.');
    const withoutLastPart = label.substr(0, indexOfDot + 1);

    if (file.includes(withoutLastPart)) {
      labelsFound.push(label);
      return;
    }
  }
}

module.exports.findUnusedLabels = async function ({ labelKeys, files }) {
  const labelsFound = [];

  files.forEach((pathToFile) => {
    const file = fs.readFileSync(pathToFile, 'utf8');

    labelKeys.forEach((labelKey) => {
      processFileAndLabel(labelsFound, labelKey, file);
    });
  });

  const unusedLabels = labelKeys.filter(
    (label) => !labelsFound.includes(label)
  );
  return unusedLabels;
};
