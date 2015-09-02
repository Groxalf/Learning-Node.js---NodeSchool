var fs = require("fs");
var path = require("path");

var inputDirectory = process.argv[2];
var extension = "." + process.argv[3];


function printFilteredDirectoryFiles() {
    getFilteredFileNames(print);
}

function getFilteredFileNames(callback) {
    fs.readdir(inputDirectory, function(error, directoryFileList) {
        if (!error) callback(directoryFileList.filter(function (fileName) {
            return filterByExtension(fileName);
        }));
    });

    function filterByExtension(fileName) {
        return path.extname(fileName) === extension;
    }
}

function print(fileNameList) {
    fileNameList.forEach(function (fileName) {
        console.log(fileName);
    })
}

printFilteredDirectoryFiles();