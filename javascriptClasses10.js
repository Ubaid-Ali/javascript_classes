

class Car {
  constructor(name) {
    this.carname = name
  }

  static hello(){
    return "Hello Static from Class"
  }
}

let myCar  = new Car("Ford");

//You can call 'hello()' on the Car Class:
document.getElementById("demo10").innerHTML = `This is Car.hello ${Car.hello()}`

// But NOT on  a Car Object:
// document.getElementById("demo10").innerHTML = `This is myCar.hello ${myCar.hello()}`
// this will raise an error.
