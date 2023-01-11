const readline = require("readline-sync");
const { folderHandler } = require("./utils/foldersHandler");

let rootPath = readline.question("\x1b[34m Type the folder you want to compress: \x1b[0m");
let excludingFiles = readline.question(
  "\x1b[34m Are there any files to be excluded for compression: \x1b[0m"
);
let excludedWord = null;
if (excludingFiles) {
  excludedWord = readline.question(
    "\x1b[34m which word include/includes the file/s you want to exclude?: \x1b[0m"
  );
}

let destinationFolder = "./generatedZipFile";
let customDestinationFolder = readline.question(
  "\x1b[34m where do you want to store the compressed folder?( As default it is stored at ./generatedZipFile): \x1b[0m"
);
console.log("#-----------------------------------------------#\n  ");

customDestinationFolder !== undefined || customDestinationFolder !== ""
  ? (destinationFolder = customDestinationFolder)
  : "./generatedZipFile";

// Parse folder
folderHandler(rootPath, excludedWord, customDestinationFolder);
