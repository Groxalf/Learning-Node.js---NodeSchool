var http = require('http');

var url = process.argv[2];

function printDataOf(response) {
    response.setEncoding('utf8');
    response.on("data", console.log);
    response.on("error", console.error);
}


function writeHttpGetContent() {
    http.get(url, printDataOf);
}

writeHttpGetContent();