
const http = require('http');
const route = require('./route');

// var message;
http.createServer(function (req, res) {
/*
	message = {
		type: '',
		text: ''
	};

	if (req.url == '/expense') {
		try {
			route.expense(req);
			message.type = 'success'
			message.text = 'Record saved successfully!';
		} catch (e) {
			message.text = e;
			message.type = 'error';
		}
		// Use single copy of code
		var page1 = mylib.getFileContent('./index.mustache');
		var html1 = mustache.render(page1, {message:message});
		res.write(html1);
		res.end();
		return;
	}

	// Same here, need to investigate why console prints 3 time
	var page = mylib.getFileContent('./index.mustache');
	var html = mustache.render(page, {message: message});
	res.write(html);
	res.end();
*/
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(route.request(req));
	res.end();

}).listen(8084);