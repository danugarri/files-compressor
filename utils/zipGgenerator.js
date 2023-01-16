const fs = require("fs");
const archiver = require("archiver");

const zipGgenerator = (directoryToCompress, files, destinationFolder) => {
  const output = fs.createWriteStream(`${destinationFolder}/compressed.zip`);
  const archive = archiver("zip");

  output.on("close", function () {
    console.log(`\n\x1b[42m  FINISHED \x1b[0m \n`);
    console.log(`\n\x1b[33m  Files compressed at: ${destinationFolder} \x1b[0m \n`);
  });

  archive.on("error", function (err) {
    throw err;
  });

  archive.pipe(output);

  files.forEach((file) => {
    const absolutePath = `${directoryToCompress}/${file}`;
    archive.append(fs.createReadStream(absolutePath), { name: file });
  });

  archive.finalize();
};

module.exports = { zipGgenerator };
