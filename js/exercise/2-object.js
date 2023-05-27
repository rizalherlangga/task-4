//class

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getInfo() {
    return `The car is a ${this.brand}`;
  }
}

let myCar = new Car("Toyota", "Vios");
console.log(getInfo());
