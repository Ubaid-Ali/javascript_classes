



// document.getElementById("demo2").innerHTML = "Javascript Working."

class Car {
	// It has to have the exact name "constructor"
	// It is executed automatically when a new object is created
	// It is used to initialize object properties
	constructor(name, year){
		// These are called Class Properties
		this.name = name;
		this.year = year;
	}


	// This is called Class Method
	age(){
		let date = new Date();
		return date.getFullYear() - this.year;
	}
}

let myCar = new Car("Mazda", 2015)
document.getElementById('demo2').innerHTML = `My car name is ${myCar.name} and my Car is ${myCar.age()} years old.` 