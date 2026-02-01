//primitive data types are number, string, boolean, null, undefined, symbol
//non primitive are array, object etc..
//copy the value
let person = 'walid';
let newPerson = person;
console.log(newPerson)
person = 'waliddddd'
console.log(newPerson)
console.log(person)  

//copy the address
let person1 = {
  name: 'walid bin yousuf'
}
let newPerson1 = person1
;
console.log(newPerson1)
person1.name = 'dipa'
console.log(newPerson1)
//undefined
let name;
console.log(name)
let name1 = null
console.log(typeof name1)
//undefined
function sum( n1,n2){
  console.log(n1,n2)
  
}
const result = sum(10,20)
console.log(result)

//undefined
function sum( n1,n2){
 return;
  
}
const result1 = sum(10,20)
console.log(result)