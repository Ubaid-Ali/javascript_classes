
// document.getElementById("demo5").innerHTML = "javascript working!";


class Car {
	constructor(brand) {
		this.carName = brand;
	}
	present(){
		return `I have a ${this.carName}`;
	}
}

class Model extends Car {
	constructor(brand, mod){
		// The super() method refers to the parent class.
		// By calling the super() method in the constructor method,
		// we call the parent's constructor method and gets access to the parent's properties and methods.
		super(brand)
		this.model = mod;
	}
	show() {
		return `${this.present()}, It is a ${this.model}, checking this variable ${this.carName}`;
	}
}

let myCar = new Model("Ford", "Mustang")
// console.log(myCar)

document.getElementById("demo5").innerHTML = myCar.show();