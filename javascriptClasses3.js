

// document.getElementById("demo3").innerHTML = "Javascript Working";

class Car {
	constructor(name, modelYear){
		this.name = name;
		this.year = modelYear;
	}
	age(y) {
		return y - this.year
	}
}

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let myCar3 = new Car("Farrari", 2005);
document.getElementById("demo3").innerHTML = `My Car name is ${myCar3.name} and it is ${myCar3.age(currentYear)} years old.`;
