// Arrow functions

const myfunc = (parameter=12) => {
	console.log(++parameter);
}

const add = (a, b) => a+b;
console.log(add(1, 13));

const mult = a => a*10;
console.log(mult(12));


let data = [1,2,3,4,5,6,7,8];
data.forEach((n, index) => console.log(`${index}|${n}`));
