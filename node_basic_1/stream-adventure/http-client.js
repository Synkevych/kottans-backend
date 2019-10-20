const request = require('request');
const port = 'http://localhost:8099';

let r = request.post(port);
process.stdin.pipe(r).pipe(process.stdout);