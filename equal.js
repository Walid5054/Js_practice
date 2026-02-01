const num = 10;
const num2 = '10'
if(num==num2){
  console.log("this is equal value")
}
else {
  console.log("this is not equal")
}
// === checks the data type also
const num1 = 10;
const num3 = '10'
if(num1===num3){
  console.log("this is equal value")
}
else {
  console.log("this is not equal")
}
// non primitive data can not be compared
// if the address is same it compares
const num4 = []
const num5 = num4
if(num4==num5)
{
  console.log("this is equal")
}
else {
  console.log("this is not equal")
}

if(5*'2'===10)
{
  console.log("this is equal")
}
else {
  console.log("this is not equal")
}
console.log('5'+'2')
