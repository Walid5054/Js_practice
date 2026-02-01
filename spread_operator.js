const friends = ['Alice', 'Bob', 'Charlie'];
console.log(...friends)
const newArray = ['David', ...friends, 'Eve'];
console.log(newArray);
const numbers = [1, 2, 3, 4, 5];
const maxNumber = Math.max(...numbers);
console.log(maxNumber);