// Create Objects from literals
let empty = {};
let point = {
  x: 2,
  y: 5
};
let p2 = {
  x: point.x,
  y: point.y + 10
};
let book = {
  "title": "book_title",
  "sub-title": ["chap1", "chap2"],
  for: "all audiences",
  author: {
    firstname: "David",
    lastname: "Coperfield"
  }
};

// Create Objects by new keyword
let o = new Object({
  o_version: "9432",
  o_id: 84
});

// Create Object by prototype
let obj = Object.create({
  x: 1,
  y: 1
});
let obj_2 = Object.create(null); // No properties or methods
let obj_3 = Object.create(Object.prototype) // {} or new Object()


// Query and Setting properties
let author = book.author;
let title = book["title"];

// Create property
book.edition = 7;

// Update property
book.title = "new_title";


// Inheritance
let person = {
  name: undefined, // Using undefined to tell that a property has no value
  age: undefined,
  birthday: undefined
};
let man = Object.create(person);
man.job = undefined


// Delete properties
let my_obj = {
  x: 1
};
delete my_obj.x;
