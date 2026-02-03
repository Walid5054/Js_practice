function person1(){
  console.log("Tea is ready");
}
function person2(){
  console.log("Coffee is ready");
}
function person3(){
  setTimeout(() => {
    console.log('fuchka is ready');
  }, 2000);
}
function person4(){
  console.log("Sweets are ready");
}
function person5(){
  setTimeout(() => {
    console.log('fuchka is ready');
  },2000);
}
person1();
person2();
person3();
person4();
person5();