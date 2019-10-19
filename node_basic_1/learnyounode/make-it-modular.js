const mymodule = require('./mymodule.js');
const folder = process.argv[2];
const ext = process.argv[3];

function callback(err, data) {
	if (err) {
		return console.error(err);
	}
	data.forEach(elem => console.log(elem));
}

mymodule(folder, ext, callback);

/*
 
    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }
    
      list.forEach(function (file) {
        console.log(file)
      })
    })
*/
