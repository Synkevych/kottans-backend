const trumpet = require('trumpet');
const fs = require('fs');
const through = require('through2');
const tr = trumpet();

// fs.createReadStream('input.html').pipe(tr);
let stream = tr.select('.loud').createStream();
stream
	.pipe(
		through(function(buf, _, next) {
			this.push(buf.toString().toUpperCase());
			next();
		})
	)
	.pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);
