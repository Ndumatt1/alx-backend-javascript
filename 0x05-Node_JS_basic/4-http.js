const http = require('http');

http.createServer(function (req, res) {
    res.end('Hello Holberton School!');
}).listen(1245);

module.exports = app;