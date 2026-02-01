class vehicle {
  constructor(name,price){
    this.name = name;
    this.price = price;
  }
  move(){
    console.log("ami cholachol korte pari");
  }
}

class Bus extends vehicle {
  constructor(name,price,capacity){
    super(name,price);
    this.capacity = capacity;
  }
  route(){
    console.log("Dhaka to cox's bazar");
  }
}
class Truck extends vehicle {
  constructor(name,price,load){
    super(name,price);
    this.load = load;
  }
}

let bus1 = new Bus("volvo",5000000,50);
console.log(bus1);
bus1.move();
bus1.route();