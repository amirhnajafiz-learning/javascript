// A simple script to check the wifi connection status
let el = document.createElement("div"); // create new element

document.querySelector(".container").prepend(el); // adding a new element before container


// Adding the two main events of project
window.addEventListener('online', (event) => {
	el.innerText = "Hello World! You are online.";
	el.classList.add("alert-success");
	el.classList.remove("alert-danger");
});

window.addEventListener('offline', (event) => {
	el.innerText = "Sorry! You are offline.";
	el.classList.add("alert-danger");
	el.classList.remove("alert-success");
});


// Add an event to button
document.querySelector(".exit").addEventListener('click', (event) => {
	window.close();
});
