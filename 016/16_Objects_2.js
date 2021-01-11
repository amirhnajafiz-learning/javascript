// Other methods and usages of objects
let memory = [
	{
		tool_id: 9012,
		tool_name: "Hammer 12P",
		price: "20$",
	}
	{
		tool_id: 2011,
		tool_name: "Nail 3cm",
		price: "4$",
	}
	{
		tool_id: 7032,
		tool_name: "New Drail",
		price: "120$",
	}
];


memory.forEach(part => {
	console.log(part.tool_id, part.tool_name);
	console.log(part.price);
	console.log("--------");
});