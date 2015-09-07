path = require('path');
fs = require('fs');


function filterDirectoryFilesByExtension(directoryPath, fileNameExtension, callback) {
    fs.readdir(directoryPath, function (error, directoryFileList) {
        if (!error)
            return callback(null, directoryFileList.filter(function (fileName) {
                return path.extname(fileName) === '.' + fileNameExtension;
            }));
        return callback(error);
    })
}


module.exports = filterDirectoryFilesByExtension;