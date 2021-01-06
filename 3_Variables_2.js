// Diffrences between var and let
var new_var = 10;
let new_let = 20;


// We can do this :
var new_var = 100;

// But not this :
// let new_let = 200;

// Insted :
new_let = 200;


console.log(new_var, new_let)

// Also their difference is in scope defining
{
	var new_var = 1000; // Changes the outside var
	let new_let = 2000; // Do not changes the outside var
						// Just changes the in scope var
}

console.log(new_var, new_let)

// Also var will be known in outside scopes but let will not

// This will give undefine
console.log(var_new_test); // Undefine
var var_new_test = 10;
console.log(var_new_test); // 10

// But this will give an error
console.log(let_new_test); // Error
let let_new_test = 20;
console.log(let_new_test); // 20


// Better to use let in total.