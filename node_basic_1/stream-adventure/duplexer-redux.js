const dup = require('duplexer2');
const throu = require('through2').obj;

module.exports = function(counter) {
	let counts = {};
	let input = throu(write, end);

	return dup({objectMode: true}, input, counter);

	function write(row, unicode, next){
		counts[row.country] = (counts[row.country] || 0) + 1;
		next();
	};

	function end(done){
		counter.setCounts(counts);
		done();
	};
	// return a duplex stream to count countries on the writable side
	// and pass through `counter` on the readable side
};
