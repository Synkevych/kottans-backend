function repeat(operation, num) {
	while (num) {
		operation();
		num--;
	}
}
module.exports = repeat;

/* official solution to compare 
  
function repeat(operation, num) {
    if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }
    
	module.exports = repeat
*/
