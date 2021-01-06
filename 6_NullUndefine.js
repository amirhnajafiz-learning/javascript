// Null and undefined types
let my_variable;

console.log(typeof(my_variable)); // This is 'undefined'

my_variable = null; // Nothing really init

console.log(typeof(my_variable)) // This is 'object'


// Other differences
let num1;
num1 + 5;
console.log(num1); // Nan ( not a number )
console.log(num1); // This is a number

let num2 = null;
console.log(num2 + 5); // Output 5