const http = require('http');

const callback = response => {
	response.setEncoding('utf8');
	response.on('data', function(data) {
		return console.log(data);
	});
	response.on('error', console.error);
};

http.get(process.argv[2], callback).on('error', console.error);

/* best way
    const http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
	}).on('error', console.error)
*/
