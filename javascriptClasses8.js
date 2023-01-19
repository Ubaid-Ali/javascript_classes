

// document.getElementById('demo8').innerHTML = "Javascript Working!"


class Car{
	constructor(brand){
		this._carName = brand;
	}

	get carName(){
		return this._carName;
	}
	set carName(x){
		return this._carName = x;
	}
}

let myCar = new Car("Nissan");
// document.getElementById("demo8").innerHTML = myCar.carName;
console.log(myCar.carName);

// use setter
myCar.carName = "Ford";
document.getElementById("demo8").innerHTML = myCar.carName;
console.log(myCar.carName);