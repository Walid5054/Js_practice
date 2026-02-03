// JSON javascript object notation
// const person = {
//   name: "Alice",
//   age: 25,
//   hobbies: ["reading", "traveling", "swimming"],
// }
// Convert JavaScript object to JSON string
// const newPerson = JSON.stringify(person);
// console.log(newPerson);
// console.log(typeof newPerson);
// Convert JSON string back to JavaScript object
// const objPerson = JSON.parse(newPerson);
// console.log(objPerson);
// console.log(typeof objPerson);

// fetch('https://jsonplaceholder.typicode.com/todos/1') //fetch does a get request by default and returns a promise 
      // .then(response => console.log(response)) //response.json() also returns a promise
      //.then(json => console.log(json)) //handling the resolved promise
//       .catch(error => console.error('Error fetching data:', error));

// const loadData = () => {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching data:', error));
// }
// const handleUser = () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res=>res.json())
//   .then(data=>{
//     console.log(data)
//     displayUsers(data)
//   })
// }
// const displayUsers = (users) => {
//   console.log(users[0].name)
// }


// const handleUser = () => {
//    fetch('https://jsonplaceholder.typicode.com/users')
//    .then(res=>res.json())
//    .then(data=>{
//      showUser(data)
//    })
// }
// const showUser = (users) => {
//   const userContainer = document.getElementById('users');
//   for(let i=0;i<users.length;i++){
//     const li = document.createElement('li');
//     li.textContent = `Name: ${users[i].name}, Email: ${users[i].email}`;
//     userContainer.appendChild(li);
//   }
// }

const handlePost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(data=>{
    displayPosts(data)
  })
}

const displayPosts = (posts) => {
const postContainer = document.getElementById('postContainer');
for(const post of posts){
  const div = document.createElement('div');
  div.classList.add('post');
  div.innerHTML = `<h3>${post.title}</h3>
  <p>${post.body}</p>
  <hr/>`;
  postContainer.appendChild(div);
}
}

const handleUpdate = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT', // or 'PATCH'
    headers: {  
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: 1,
      title: "Updated Post Title",
      body: "Updated Post Body",
      userId: 1
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error updating post:', error));
}
const handleDelete = async () => {
try{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  });
  const data = await response.json();
  console.log(data);
}
}
//get, post, put/patcht , delete get methods