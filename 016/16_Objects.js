// Objects in java script
let myobj = {
	id: 1202,
	version: "0.0010V2020",
	pointer: "1x0d1240012",
	status: true,
	domain_keys: ["http", "ftp", "https"],
	// Methods
	full_data()
	{
		this.domains();
		return `${this.id}|${this.version}|${this.pointer}|${this.status}|${this.domain_keys}`
	},
	set_version(version)
	{
		this.version = version;
	},
	domains()
	{
		this.domain_keys.forEach( function(element, index) {
			console.log(element);
		});
	},
};

console.log(myobj.id, myobj.domain_keys[0]);
console.log(myobj['version']);

myobj.id = 1200;
console.log(myobj.full_data());

myobj.set_version("1.0010V2021");