// document.getElementById('demo9').innerHTML = "Javascript Working!";


// We cannot use class yet!
// let myCar = new Car("Suzuki");
// This would raise an error

class Car{
	constructor(brand){
		this.carname = brand;
	}
}

let myCar = new Car("Farrari");
document.getElementById("demo9").innerHTML = myCar.carname;