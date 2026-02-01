const person = {
  name: 'Alice',
  action: function(){
    console.log(this.name)
  }
}

class Person{
  #status;
  constructor(name,age,status){
    this.name = name;
    this.age = age;
    this.#status = status;
  }
  action(){
    console.log(this.#status);
  }
}
const person1 = new Person('Bob',30,'single');
console.log(person1);
person.action();
// console.log(person1.#status); // This will throw an error because #status is private
console.log(person1);
person1.action();