/*
* Open server at port: 8084
* Hit URL: http://localhost:8084 to access
*/
const http = require('http');
const route = require('./route');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(route.request(req));
	res.end();
}).listen(8084);
