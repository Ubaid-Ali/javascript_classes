


class Car {
  constructor(name) {
    this.name = name;
  }

  static hello(x){
    return `Hello ${x.name}`;
  }
}


let carName = new Car("Farrari");

document.getElementById("demo11").innerHTML = Car.hello(carName);
