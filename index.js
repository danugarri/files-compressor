const readline = require("readline-sync");
const { folderHandler } = require("./utils/foldersHandler");

let rootPath = "./utils/exampleFolder";
rootPath !== undefined || rootPath !== ""
  ? readline.question(
      "\x1b[34m Type the Absolute path in your computer to folder you want to compress (As default it is ./utils/exampleFolder): \x1b[0m"
    )
  : "./utils/exampleFolder";
let excludingFiles = readline.question(
  "\x1b[34m Are there any files to be excluded for compression: \x1b[0m"
);
let excludedWord = null;
if (excludingFiles) {
  excludedWord = readline.question(
    "\x1b[34m which word include/includes the file/s you want to exclude?: \x1b[0m"
  );
}

let customDestinationFolder = "./generatedZipFile";

customDestinationFolder !== undefined
  ? readline.question(
      "\x1b[34m where do you want to store the compressed folder?( As default it is stored at ./generatedZipFile): \x1b[0m"
    )
  : "./generatedZipFile";
console.log("#-----------------------------------------------#\n  ");

// Parse folder
folderHandler(rootPath, excludedWord, customDestinationFolder);
