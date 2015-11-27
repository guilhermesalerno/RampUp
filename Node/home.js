// Node application start up

var port = process.env.PORT || 3000;
var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
	path = url.parse(request.url).pathname;
	response.writeHead(200, { "Content-Type": "text/plain"});
	response.end(path + "\n");
});

server.listen(port);

console.log("Server running at http://127.0.0.1:" + port);