

document.getElementById("demo4").innerHTML = "Javascript Working!";

class Car {
	constructor(name, year){
		this.name = name;
		this.year = year;
	}

	age(y) {
		let date = new Date();
		return date.getFullYear() - this.year;
	}
}


let myCar4 = new Car("Toyota", 2020);
document.getElementById("demo4").innerHTML = `My Car name is ${myCar4.name} and it is ${myCar4.age()} years old.`;