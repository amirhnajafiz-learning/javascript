// Functions in js

function myFun (number) 
{
	return sqrt(number);
}

console.log(myFun(16));
console.log(myFun(101));


// Function expressions

const encode = function (number, base=2) 
{
	return number ** base;
};

console.log(encode(10, 2)); // 100
console.log(encode(10, 0.5)); // Sqrt(10)
console.log(encode(12)); // 144

// Diffrence is that functions define first but not expressions


function decode (number, base=2)
{
	new_base = (1 / base);
	return number ** new_base;
}

console.log(decode(encode(10))); // 10