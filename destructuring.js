const hena = {
    name: 'Hena',
    age: 25,
    friends: ['Alice', 'Bob', 'Charlie'],
    status : 'not found'
}
//with destructuring we can extract multiple properties from an object
const {name, age, friends, status} = hena
console.log(name, age, friends, status);

//destructuring with arrays
const persons = ['John',{name:'walid'}, 'Doe', 30, 'Engineer'];
const [hero, obj]= persons;
console.log(hero,obj);