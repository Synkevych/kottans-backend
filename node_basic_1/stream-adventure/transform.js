let through2 = require('through2');

function write(buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}
process.stdin.setEncoding('utf8');
process.stdin.pipe(through2(write)).pipe(process.stdout);
