// Document object model

// Accessing elements by id
let header = document.getElementById("header");
header.style.color = 'red';

// by class name
let context = document.getElementsByClassName("content");
console.log(context.length);
context[0].fontSize = '25px';

// by tag names
let divisions = document.getElementsByTagName("div");
console.log(divisions.length);



// Two other methods
// Query selectors allows us to select elements by css selector
let other_header = document.querySelector("#header");

let first_div = document.querySelector("div");

let first_cont = document.querySelector(".content");

// Get all elements
let other_divisions = document.querySelectorAll("div");
other_divisions.forEach(singlediv => {
	singlediv.border = '1px solid black';
});


// Query is better in usage => cause query will return objects like array or ...
// but using the first methods needes a casting to convert document object to normal object.
// For accessing other parts of dom by query selector use the css selectors in inspect.
