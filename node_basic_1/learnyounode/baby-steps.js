let arr = process.argv;
let sum = arr.reduce((acc, e,) => {
	if(Number(e)){
		acc += Number(e);  
	}
	return acc;
},0)
console.log(sum)