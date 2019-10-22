// list of file in a giving dir
const fs = require('fs');

const dir = process.argv[2];
const file = `. ${process.argv[3]}`;

function callback(err, list) {
  if (err) {
    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
    console.error(err);
  }
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].slice(-3) === file) {
      /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
      console.log(list[i]);
    }
  }
}

fs.readdir(dir, callback);

//  perfect solutions
//     const fs = require('fs')
//     const path = require('path')

//     const folder = process.argv[2]
//     const ext = '.' + process.argv[3]

//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
// })
