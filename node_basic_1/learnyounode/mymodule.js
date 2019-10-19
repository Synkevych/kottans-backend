/* export single functions that takes three arguments
dir name 
filename 
callback function 
*/
const fs = require('fs');
const path = require('path');

module.exports = (folder, ext, callback) => {
	fs.readdir(folder, function(err, files) {
		if (err) {
			return callback(err, null);
		}
		files = files.filter(function(file) {
			return path.extname(file) === '.' + ext;
		});
		return callback(null, files);
	});
};
/*
    const fs = require('fs')
    const path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }
*/