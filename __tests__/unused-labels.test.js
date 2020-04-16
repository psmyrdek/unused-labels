const { join } = require('path');
const { generateReport } = require('../lib');

test('should create basic summary', async () => {
  await generateReport({
    srcFile: join(__dirname, './labels.yml'),
    dirName: join(__dirname, './project'),
    outDirName: join(__dirname, './results'),
  });
  const result = require('./results/unused-labels.json');
  expect(result.length).toBe(0);
});
