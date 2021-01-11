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
