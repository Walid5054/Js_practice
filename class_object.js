 class product {
  constructor(name, price,brand, owner){
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.owner = owner;
  }
 }
 const iphone = new product('iphone 14', 90000, 'apple', 'ali');
 console.log(iphone);
 const laptop = new product('lenovo yoga', 80000, 'lenovo', 'hena');
 console.log(laptop);