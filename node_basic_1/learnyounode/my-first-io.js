const fs = require('fs');
let buf = fs.readFileSync(process.argv[2]);
const str = buf.toString();
let result = str.split('\n').length - 1;
console.log(result);
/* the best solutions 
const fs = require('fs')
    
    const contents = fs.readFileSync(process.argv[2])
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)
*/