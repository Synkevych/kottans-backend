const http = require('http');
const url = require('url');

function getUnixTimeStamp(startTime) {
	return {
		unixtime: getTimeStamp(startTime)
	};
}
function getTimeStamp(startTime) {
	return Date.parse(startTime);
}

function getTimeObj(startTime) {
	let date = new Date(getTimeStamp(startTime));
	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
}

const server = http.createServer(function(req, res) {
	let urlObj = url.parse(req.url, true),
		pathname = urlObj.pathname,
		startTime = urlObj.query.iso,
		result;

	if (pathname === '/api/parsetime') {
		result = getTimeObj(startTime);
	}
	if (pathname === '/api/unixtime') {
		result = getUnixTimeStamp(startTime);
	}

	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}

	req.pipe(res);
});

server.listen(Number(process.argv[2]));
