// A simple script to add items to a list in page
let users = [
	{name: "user1", new:true},
	{name: "user2", new:true},
	{name: "user3", new:false},
	{name: "user4", new:true},
	{name: "user5", new:false},
];


function create_users (people)
{
	let ul = document.querySelector("ul");
	ul.innerHTML = '';
	people.forEach(item => {
		ul.innerHTML += `<li>${item.name}</li>`;
	});
}