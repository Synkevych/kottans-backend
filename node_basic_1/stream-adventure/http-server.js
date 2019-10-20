const http = require('http');
const through = require('through2');
let port = process.argv[2];

let httpServer = http.createServer(function(req, res) {
	if (req.method === 'POST') {
		req
			.pipe(
				through(function(buf, _, next) {
					this.push(buf.toString().toUpperCase());
					next();
				})
			)
			.pipe(res);
	} else res.end('Send me a POST\n');
});

httpServer.listen(parseInt(port));
