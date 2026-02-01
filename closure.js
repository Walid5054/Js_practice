function temporary(){
  count =0;
  return function add(){
         count = count+1;
         console.log(count)
  }

}
const add = temporary();
add()
add()