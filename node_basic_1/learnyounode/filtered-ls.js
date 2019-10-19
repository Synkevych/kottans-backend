//list of file in a giving dir
const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const file = '.' + process.argv[3];

fs.readdir(dir, callback);

function callback(err, list) {
	if (err) {
		console.error(err);
	}
	for (let i = 0; i < list.length; i++) {
		if (list[i].slice(-3) == file) {
			console.log(list[i]);
		}
	}
}

/* perfect solutions 
    const fs = require('fs')
    const path = require('path')
    
    const folder = process.argv[2]
    const ext = '.' + process.argv[3]
    
    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
	})
*/