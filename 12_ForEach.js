// For each - new method in modern java script
let data = ["A", "b0", "4r", "da", "dewq"]

data.forEach(element => console.log(element));
data.forEach((element, index) => {
	console.log(`${index}.${element}`)
});

