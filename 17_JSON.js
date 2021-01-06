// Working with json build-in object

let data_pack = {
	id = 1010,
	version = "12V4Sep2020",
}

/*
* Two methods of json objest are .parse and stringify,
* which :
*	1. stringfy => converts an object to json string data
*	2. parse => creates a new object based on a json string data
*/
let backup = JSON.parse(JSON.stringify(data_pack)); // Create a copy of our object


