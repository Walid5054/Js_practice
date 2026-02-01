const nums = [10, 20, 30, 40, 50];
let sum =0;
let arr = [];
nums.forEach((num,index) =>{
  console.log(num);
  sum += num;
  arr[index] = num *2;
})
console.log('Total Sum:', sum);
console.log(arr);
const users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 25 }
];
users.forEach(({name, age})=>{
  console.log(`${name} is ${age} years old`);
})

const str = ['walid', 'hena', 'alid'];
const convert = str.map(s=>{
  return s.toUpperCase();
})
console.log(convert);
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 }
];
const discountPrice = products.map(product=>{
  return {
    ...product,
  discountPrice: product.price * 0.9  }
})
console.log(discountPrice);

const arrFilter = [10, 15, 20, 25, 30, 35];
const filteredArr = arrFilter.filter(num=>{
  if(num%2===0){
    return num;
  }
})
console.log(filteredArr); // [ 10, 20, 30 ]

const mixarr = [0, "hello", false, 42, "", null]
const truthyvalues = mixarr.filter((value=>{
  return Boolean(value);
}))
console.log(truthyvalues); // [ 'hello', 42 ]