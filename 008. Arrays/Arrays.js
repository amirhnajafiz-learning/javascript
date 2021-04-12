// Arrays
let students = ["Te", "Tex", "Text"];

console.log(students.length);
console.log(students[2]); // This type is string
console.log(typeof students); // Objects

console.log(students.toString()); // Te,Tex,Text
console.log(students.join(' | ')); // Te | Tex | Text

let myString = "Say hi by writing hello world!";
let parts = myString.split(" ");

// Top head methods
students.push("Content");
students.pop();

// Bottom tail methods
students.shift();
students.unshift("New article");

// students.splice(start: int, deleteCount: int, items...: any)
students.splice(1, 3);
students.splice(1, 0, "Art1", "Art2");

// Slicing an array
let new_part = students.slice(0);

students = students.sort(); // Can take a function or lambda
students = students.reverse(); // Not sorting just reversing

// Sorting numbers is not int compareing
// For fixing it : ( using arrow functions )
let data = [1,4,54,3,23,4,21,24];
data = data.sort((a, b) => a-b);

console.log(students.include("Te")); // Searching in array

let data_base = data.concat(students); // Add two arrays
let all = data_base.concat(students, data);

console.log(data.indexOf(23)); // Not found => -1

// Using more arrow functions
console.log(data.find((n) => n > 10)); // First greater than 10
console.log(data.filter((n) => n % 2 == 0)); // Get all the evens


// arrays in arrays
let matrix = [
	["Test", 4],
	["Tex", 3],
	["pi", 3.14],
];

console.log(matrix[2][1]); // 3.14
