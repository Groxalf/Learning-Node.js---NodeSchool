var fs = require("fs");

var file = process.argv[2];

fs.readFile(file, function(error, data) {
    if (error) {
        fs.readFileSync(file);
        console.log(getNumberOfLines(getNumberOfLines(buffer)));
    }
    console.log(getNumberOfLines(data));
});

function getNumberOfLines(bufferedContent) {
    return bufferedContent.toString().split("\n").length - 1;
}
