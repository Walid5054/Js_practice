const  a =10;
const first = () => {
  second();
  console.log('hello I am first');
}
const second = () => {
  third();
  console.log('hello I am second');
}
const third = () => {
  console.log('hello I am third');
}
const b = 20;
first();
console.log('I will be last');