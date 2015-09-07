var fs = require("fs");
var path = require("path");

var directoryPath = process.argv[2];
var extensionFileName = "." + process.argv[3];


function printFilteredDirectoryFiles() {
    getFilteredFileNames(print);
}

function getFilteredFileNames(callback) {
    fs.readdir(directoryPath, function(error, directoryFileList) {
        if (!error) callback(directoryFileList.filter(function (fileName) {
            return filterByExtension(fileName);
        }));
    });

    function filterByExtension(fileName) {
        return path.extname(fileName) === extensionFileName;
    }
}

function print(fileNameList) {
    fileNameList.forEach(function (fileName) {
        console.log(fileName);
    })
}

printFilteredDirectoryFiles();