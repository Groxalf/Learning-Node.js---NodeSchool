var fs = require("fs");

var buffer = fs.readFileSync(process.argv[2]);
var lines = buffer.toString().split("\n").length - 1; // Subtracts due last line, cause plus one more when no '\n' symbol
console.log(lines);
