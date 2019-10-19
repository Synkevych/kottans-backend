// print collected content provided by each of the URLs
const http = require('http');
let i = 2;
while (process.argv[i]) {
	http.get(process.argv[i].toString(), function(response) {
		let data = '';
		response.setEncoding('utf8');
		response.on('data', function(chunk) {
			data += chunk;
			return data;
		});
		response.on('end', function() {
			console.log(data);
		});
		response.on('error', console.error);
	});
	i++;
}

/* the best way
const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0
    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }
*/