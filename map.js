const numbers = [1, 2, 3, 4, 5];
const newArray = numbers.map(value=>
  {
    return value+1
  });
console.log(newArray);

const square = numbers.map((sq)=>{
  return sq*sq
});
console.log(square);