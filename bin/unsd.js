#!/usr/bin/env node

const argv = require('minimist');
const { join } = require('path');
const { generateReport } = require('../lib');

(async () => {
  const {
    src,
    dir,
    outDir
  } = argv(process.argv);

  const srcFile = join(process.cwd(), src);
  const dirName = join(process.cwd(), dir);
  const outDirName = outDir || process.cwd();

  const params = {
    srcFile,
    dirName,
    outDirName
  };

  await generateReport(params);
})();
