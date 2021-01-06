// Accessing the subelements and superelements in dom
let ul = document.querySelector("ul");

console.log(Array.from(ul.children)); // Showing the sub elements as an array

ul.parentElement.style.background = '#FFF';

console.log(ul.previousElementSibling); // Prev element in dom
console.log(ul.nextElementSibling); // Next element in dom

