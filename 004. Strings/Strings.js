// Primitive Data Types
// Number - Boolean - String - Null - Undefined - Symbol
// Non-Primitive Data Types
// Array - Object - Function - Date - Regex

let myStr = ""; // String type

let name = "Amir";
let middle_name = "Hossein";
let family_name = "Najafi";

let data = name + middle_name + " " + family_name;
console.log(data);

// To create a new string with ` ` sign.
let new_data = `My name is ${name}${middle_name} ${family_name}`;

// String methods 
data = `Text text text text text texttexttext texttext text
		texttexttexttext text texttexttexttext texttext texttext text`

console.log(data.length);

console.log(data[0] + data[-1]);
console.log(data.slice(0, 9));
console.log(data.substr(10, 5));

console.log(data.includes("texttext")); // Case Sensetive

data = data.toLowerCase();
data = data.toUpperCase();

console.log(data.search("texttexttext")); // Index of element

data.replace("TEXT", "New");

data.trim(); // Spaces before after
console.log(data.startsWith("T"));
console.log(data.endsWith("t"));

new_data = "5";
// New methods
console.log(new_data.padStart(4, 0)); // 0005
console.log(new_data.padEnd(4, 0)); // 5000


// Working with long strings
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)


// Data string output
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically