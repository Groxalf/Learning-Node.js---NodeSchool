var fileNameFilterer = require('./filenamefilterer.js');

var directoryPath = process.argv[2];
var extensionName = process.argv[3];


function printFileByNameExtension(directoryPath, fileExtensionName) {

    fileNameFilterer(directoryPath, fileExtensionName, printFiles);

}

function printFiles(error, fileList) {
    if (error) console.error("An error has occurred when calling Async method: " + error)
    fileList.forEach(function(fileName) {
        console.log(fileName);
    });
}

printFileByNameExtension(directoryPath, extensionName);