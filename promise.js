// const loadData = () => {  fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   }).catch(error => {
//     console.error('Error fetching data:', error);
//   });
// };

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     const status = false; // Simulating a condition
//       if(status){
//         const mockData = {
//           json:()=>Promise.resolve({id:1, title:'Mock Data'})
//         }
//         resolve(mockData);
//       } else {
//         reject('Data not found');
//       }
//     });
//   };
//   fetchData().then(res=>console.log(res)).catch(err=>console.error(err));

// const fetchUsers= fetch('https://jsonplaceholder.typicode.com/users');
// const fetchPosts= fetch('https://jsonplaceholder.typicode.com/posts');
// const fetchComments= fetch('https://jsonplaceholder.typicode.com/comments');
// Promise.all([fetchUsers, fetchPosts, fetchComments])
// .then(responses => {
//   return Promise.all(responses.map(response => response.json()));
// })
// .then(data => {
//   const [users, posts, comments] = data;
//   console.log('Users:', users);
//   console.log('Posts:', posts);
//   console.log('Comments:', comments);
// })
// .catch(error => {
//   console.error('Error fetching data:', error);
// });

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/comments'
];
Promise.all(urls.map(url=>{
  return fetch(url).then(res=>res.json()).then(data=>data).catch(err=>console.error(err));
}))
.then(res=>res)
.then(data=>console.log(data))