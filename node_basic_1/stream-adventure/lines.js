let split = require('split');
let through = require('through2');

function alternateFactory(opts) {
	let counter = 0;
	return function convertFn(string) {
		counter++;
		return counter % 2 == 0 ? string.toUpperCase() : string.toLowerCase();
	};
}

const converter = alternateFactory();

process.stdin.pipe(split('\n')).pipe(
	through(function(buffer, encoding, next) {
		console.log(converter(buffer.toString()));
		next();
	}).pipe(process.stdout)
);

// the original solutions

var lineCount = 0;
var tr = through(function(buf, _, next) {
	var line = buf.toString();
	this.push(
		lineCount % 2 === 0 ? line.toLowerCase() + '\n' : line.toUpperCase() + '\n'
	);
	lineCount++;
	next();
});

process.stdin
	.pipe(split())
	.pipe(tr)
	.pipe(process.stdout);
