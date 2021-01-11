// Working with elements attributes
let header = document.querySelector("#header");

console.log(header.getAttribute("id"));

header.setAttribute("title", "my new title");


// Using dataset
let links = document.querySelectorAll("a");

links.forEach(link => {
	let href = link.href;
	if (href.contains("http"))
	{
		href.replace("http", "https");
	}
	link.setAttribute("protocole", "SSL");
	link.dataset.vesrion = "00.01"; // Adding custom attribute
	console.log(link.dataset.protocole); // Accessing custom attributes by dataset
});

// Using dataset is much more reflective than normal way.
// You can add new properties without changing other properties.


// Using classes
// get an element classes
console.log(header.classList);

header.classList.add("mb-5");
header.classList.remove("mb-5");

header.classList.toggle("mb-5"); // Adds if not , removes if it had

