#!/usr/bin/env node

const argv = require('minimist');
const { join } = require('path');
const { generateReport } = require('../lib');

(async () => {
  const { src, dir } = argv(process.argv);

  const srcFile = join(process.cwd(), src);
  const dirName = join(process.cwd(), dir);

  const params = {
    srcFile,
    dirName,
  };

  await generateReport(params);
})();
