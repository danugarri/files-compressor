const fs = require("fs");
const { zipGgenerator } = require("./zipGgenerator");

const folderHandler = (rootPath, excludedWord, destinationFolder) => {
  // Read the content inside
  // console.log("rootPath:", rootPath);

  fs.readdir(rootPath, { withFileTypes: true }, (error, files_rootPath) => {
    const filesInside = files_rootPath
      .filter((item) => item.isFile() && !item.name.includes(excludedWord))
      .map((item) => item.name);

    console.log(`\x1b[34m Root directory: \x1b[0m ${rootPath} `);
    console.log(`\n\n  Files names for the path:  ${rootPath}: \n\x1b[32m${filesInside} \x1b[0m `);
    // Call to generate zip files
    zipGgenerator(rootPath, filesInside, destinationFolder);
  });
};

module.exports = { folderHandler };
