var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello World!'+'\n');
	res.write('Student ID : 5711405362'+'\n');
	res.write('Name : Ariya Salasuk'+'\n');

	res.end('Nickname : R');
	
}).listen(8080);
