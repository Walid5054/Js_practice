// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }
// const person1 = new Person('John', 25);
// console.log(person1);
// person1.greet();

// class student {
//   constructor(name,id){
//     this.name = name;
//     this.id = id;
//   }
//   getDetails(){
//     console.log(`Student Name: ${this.name}, Student ID: ${this.id}`);
//   }
// }
// const student1 = new student('Emma', 'S123');
// const student2 = new student('Liam', 'S456');
// console.log(student1);
// student1.getDetails();
// console.log(student2);
// student2.getDetails();

// class car {
//   constructor(brand, year=2024){
//     this.brand = brand;
//     this.year = year;
//   }
// }
// const car1 = new car('Toyota', 2020);
// const car2 = new car('honda');
// console.log(car1);
// console.log(car2);

// class BankAccount{
//   #balance;
//   constructor(accountNumber, initialBalance=0){
//     this.accountNumber = accountNumber;
//     this.#balance = initialBalance;
//   }

//   deposit(amount){
//     if(amount > 0)
//       {
//         this.#balance += amount;
//         console.log(`Deposited: $${amount}. New Balance: $${this.#balance}`);
//       }
//       else{
//         console.log('Deposit amount must be positive.');
//       }
//   }
//   withdraw(amount){
//     if(amount > 0 && amount <= this.#balance){
//       this.#balance -= amount;
//       console.log(`Withdrew: $${amount}. New Balance: $${this.#balance}`);
//     }
//     else{
//       console.log('Invalid withdrawal amount.');
//     }
//   }
//   getBalance(){
//     return this.#balance;
//   }
// }
// const account1 = new BankAccount('A123', 500);
// account1.deposit(200);
// account1.withdraw(100);
// console.log(`Current Balance: $${account1.getBalance()}`);
// console.log(account1);

// class user{
//   #password;
//   constructor(username, password){
//     this.username = username;
//     this.#password = password;
//   }
//   setPassword(password){
//     if(password.length >= 6){
//       this.#password = password;
//       console.log('Password updated successfully.');
//     }
//     else{
//       console.log(' must be at least 6 characters long.');
//     }
//   }
//   checkPassword(input){
//     if(input.length >= 6)
//       return this.#password === input;
//     else
//       console.log('Password must be at least 6 characters long.');
//   }
// }
// const user1 = new user();
// user1.setPassword('newps');
// console.log(user1);

class Animal {
  makeSound() {
    return 'bark';
  }
}
class Dog extends Animal {
  makeSound() {
    return 'woof';
  }
}
const myDog = new Dog();
console.log(myDog.makeSound());

class Employee {
  constructor(name, salary ){
    this.name = name;
    this.salary = salary;
  }
}
class Manager extends Employee {
  constructor(name, salary, department){
    super(name, salary);
    this.department = department;
  }
}

class Shape {
  area() {
    return 0;
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}
const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.area());

class Account {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this._balance = balance; // Protected property
  }
  getBalance(){
    return this._balance;
  }
  deposit(amount){
    if(amount>0){
      this._balance += amount;
      console.log(`Deposited: $${amount}. New Balance: $${this._balance}`);
      return this._balance;
    }
    else{
      console.log('Deposit amount must be positive.');
    }
  }
}
class SavingsAccount extends Account {
  applyInterest(rate) {
    if(rate>0){
      this._balance += this._balance * rate;
      return this._balance;
    }
}
}
const mySavings = new SavingsAccount('A456', 1000);
mySavings.deposit(500);
mySavings.applyInterest(0.05);
console.log(`Balance after interest: $${mySavings.getBalance()}`);
console.log(mySavings._balance); // Accessible due to protected nature it wont't be accessible if it was private with protected we can not access it from outside the class but we can access it from 
class Course {
  constructor(title, price){
    this.title = title;
    this.price = price;
  }
  getInfor(){
    return `Course: ${this.title}, Price: ${this.price}`;
  }
}
class PremiumCourse extends Course {
  constructor(title, price, mentorName){
    super(title,price);
    this.mentorName = mentorName;
  }
  getInfo(){
    return `Course: ${this.title}, Price: ${this.price}, Mentor: ${this.mentorName}`;
  }
}
const premiumCourse = new PremiumCourse('JavaScript Advanced', 199, 'Alice');
console.log(premiumCourse.getInfo());
console.log(premiumCourse);
const course = new Course('JavaScript Basics', 99);
console.log(course.getInfor());
console.log(course);
