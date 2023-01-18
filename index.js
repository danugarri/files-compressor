const readline = require("readline-sync");
const { folderHandler } = require("./utils/foldersHandler");
// rootPath
const defaultRootPath = "./utils/exampleFolder";
let rootPath = null;
const pathInput = readline.question(
  "\x1b[34m Type the Absolute path in your computer to the folder you want to compress (As default it is ./utils/exampleFolder): \x1b[0m"
);
if (typeof pathInput === "string" && pathInput === "") {
  rootPath = defaultRootPath;
  console.log(`\x1b[35m selected path: ${rootPath} \n\x1b[0m`);
}
if (pathInput !== "") {
  rootPath = pathInput;
}

//   Files to be excluded
let excludingFiles = readline.question(
  "\x1b[34m Are there any files to be excluded for compression (y/n): \x1b[0m"
);
while (excludingFiles.toLowerCase() !== "y" || excludingFiles.toLowerCase() !== "n") {
  excludingFiles = readline.question(
    "\x1b[34m Are there any files to be excluded for compression (y/n): \x1b[0m"
  );
  if (excludingFiles.toLowerCase() === "y" || excludingFiles.toLowerCase() === "n") {
    break;
  }
}

let excludedWord = null;
if (excludingFiles.toLowerCase() === "y") {
  excludedWord = readline.question(
    "\x1b[34m which word include/includes the file/s you want to exclude?: \x1b[0m"
  );
}
// Destination folder
const defaultDestinationFolder = "./generatedZipFile";
let customDestinationFolder = null;
const destinationFolderInput = readline.question(
  "\x1b[34m where do you want to store the compressed folder?\n( As default it is stored at ./generatedZipFile): \x1b[0m"
);

if (typeof destinationFolderInput === "string" && destinationFolderInput === "") {
  customDestinationFolder = defaultDestinationFolder;
  console.log(`\x1b[35m selected path: ${customDestinationFolder} \n\x1b[0m`);
}
if (destinationFolderInput !== "") {
  customDestinationFolder = destinationFolderInput;
}

console.log("#-----------------------------------------------#\n  ");

// call to Parse folder
folderHandler(rootPath, excludedWord, customDestinationFolder);
