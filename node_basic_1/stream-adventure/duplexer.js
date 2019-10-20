const dup = require('duplexer2');
var spawn = require('child_process').spawn;

module.exports = function(cmd, args) {
	let ps = spawn(cmd, args);
	return dup(ps.stdin, ps.stdout);
	// spawn the process and return a single stream
	// joining together the stdin and stdout here
};
