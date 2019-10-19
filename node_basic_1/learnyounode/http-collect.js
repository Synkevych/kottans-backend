const http = require('http');
const bl = require('./bl');


http
	.get(process.argv[2].toString(), function(response) {
		response.pipe(
			bl(function(err, data) {
				if (err) {
					return console.error;
				}
				data = data.toString();
				console.log(data.length);
				console.log(data);
			})
		);
		response.on('error', console.error);
	})
	.on('error', console.error);

	/* the best solutions 

    const http = require('http')
    const bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
	})
	*/