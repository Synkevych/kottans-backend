const net = require('net');

let getFormatedDate = () => {
	let today = new Date();

	return (
		[
			today.getFullYear(),
			formaNumber(today.getMonth() + 1),
			formaNumber(today.getDate())
		].join('-') +
		' ' +
		[formaNumber(today.getHours()), formaNumber(today.getMinutes())].join(':')
	);
};
function formaNumber(number) {
	return number < 10 ? '0' + number : number;
}

const server = net.createServer(function(socket) {
	socket.end(getFormatedDate()+"\n");
});

server.listen( process.argv[2]);

/* 
const net = require('net')
    
    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      const d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }
    
    const server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
	server.listen(Number(process.argv[2]))
*/