const num1 = 5;
const num2 = 10;
console.log('ami prothom'); // I am first
setTimeout(test, 2000);
console.log('ami shesh'); // I am last

function test(){
  console.log('ami test')
}
setTimeout(() => {
  console.log('ami 3 second por'); // I am after 3 seconds 
}, 3000);