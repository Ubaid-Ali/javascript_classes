


// document.getElementById("demo7").innerHTML = "Javascript Working!"

class Car{
	constructor(brand){
		this._carName = brand;
	}

	get carName(){
		return this._carName
	}

	set carName(x){
		return this._carName = x
	}
}

let myCar = new Car("Nissan")

document.getElementById("demo7").innerHTML = myCar.carName;