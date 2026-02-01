const products = [
  {id: 1, name: "Laptop", price: 50000, color: 'Silver' },
  {id: 2, name: "Phone", price: 30000, color: 'Black' },
  {id: 3, name: "Tablet", price: 20000, color: 'White' },
  {id: 4, name: "Monitor", price: 15000, color: 'Black' },
  {id: 5, name: "Keyboard", price: 5000, color: 'White'  }
]
//for each does not return array like map and foreach do not change original array difference between for each, map and filter is that for each does not return anything, map returns a new array after applying the function on each element and filter returns a new array after applying the condition on each element,find returns the first element that satisfies the condition.
const pro = products.forEach(product=>{
  // console.log(product)
  if(product.color==='Black')
  {
    console.log(product);
  }
})
console.log(pro); // undefined because for each does not return anything
const newProducts = products.filter(product =>{
  return product.price > 20000
  
})
console.log(newProducts);
const product = products.find(product=>{
  return product.name === 'Tablet'
})
console.log(product);
const mappedProducts = products.map(product=>{
  return `${product.name} - ${product.price}`
})
console.log(mappedProducts);
// we will use filter when we want to filter out some elements from an array based on a condition and create a new array with those elements, we will use for each when we want to iterate over an array and perform some action on each element without creating a new array, we will use map when we want to create a new array by applying a function on each element of the original array, find is used when we want to find the first element in an array that satisfies a certain condition.