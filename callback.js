// function display(some){
//   console.log(some)
// }
// function calculate(num1,num2){
//   let sum = num1+num2;
//   return sum;
// }
// const result = calculate(5,5)
// display(result)
//The problem with the upper code is we have to call two function

// function calculate(num1,num2){
//   let sum = num1+num2;
//   display(sum);
// }
// calculate(5,5)
//The problem with the second code is we can not prevent the display function to be called .

function display(some){
  console.log(some)
}
function calculate(num1,num2,callback){
  let sum = num1+num2;
  callback(sum);
  console.log(callback)
}
calculate(5,5,display)


