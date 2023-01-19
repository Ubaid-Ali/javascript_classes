
// document.getElementById("demo6").innerHTML = "javascript working!";


class Car {
	constructor(brand){
		this.carName = brand
	}

	get cnam(){
		return this.carName;
	}
	set cnam(x){
		return this.carName = x; 
	}
}

let myCar = new Car("Ford");

document.getElementById("demo6").innerHTML = myCar.cnam;