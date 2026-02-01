// const multiply = (a,b)=> a*b
// console.log(multiply(3,4)); // 12


// const evenOdd = (num)=>{
//   if(num%2===0){
//     return 'Even'
//   }else{
//     return 'Odd'
//   }
// }
// console.log(evenOdd(7)); // Odd

const obj = (person) =>{
  return `Name: ${person.name}, Age: ${person.age}`
}
const user = {name:'Alice', age:40}
console.log(obj(user))

const numbers = [1,2,3,4,5]
const squares = numbers.map(num => num*num)
console.log(squares)

//destructuring
const user1 = {
  id: 1,
  username: "walid",
  email: "walid@gmail.com"
};
const {username, email} = user1;
console.log(username, email);

const colors = ['red', 'green', 'blue'];
const [firstcolor,secondcolor, thirdcolor] = colors;
console.log(firstcolor, thirdcolor);

const student = {
  name: "Walid",
  marks: {
    math: 85,
    physics: 90
  }
};
const {marks: {math, physics}} = student;
console.log(math, physics);

function objj(book1){
 const {book, price} = book1;
 return {book, price};
}
const boo = {book:'JS Basics', price: 20}
objj(boo)
console.log(objj(boo));

const nums = [10, 20, 30, 40, 50];
let sum =0;
for (let num of nums){
 sum += num;
  console.log(num);
}
console.log('Total Sum:', sum);

let str = 'javascript';
for(let char of str){
  console.log(char);
}

const user2 = [
  {name: 'alid', age:28},
  {name: 'hena', age:25},
];
for(let person of user2){
  console.log(`${person.name} is ${person.age} years old`);
}

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022
};
for(let key in car){
  
  console.log(key,':', car[key]);
}
const countProperties = (cnt)=>{
  let count = 0;
  for(let key in cnt){
    count ++;
    if(typeof cnt[key]==='number'){
      console.log(key,':', cnt[key]);
    }
  }
  return count;
  
}
const call = countProperties(car);
console.log('Total Properties:', call);

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 }
];
const extractPrices = (items)=>{
  let prices = [];
  for(const {name, price } of items){
    console.log(`${name}: ${price}`);
    prices = [...prices, price];
  }
  return prices;
}
const priceList = extractPrices(products);
console.log('Prices:', priceList);

