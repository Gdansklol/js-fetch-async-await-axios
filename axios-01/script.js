// GET
// axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(res => {
//         console.log(res.data);
//     })
//     .catch(error => {
//         console.log(error)
//     });

// POST
// const newUser = {
//     name : "Anna Maria",
//     customer: true
// };

// axios.post("https://jsonplaceholder.typicode.com/users" , newUser)
// .then(res => {
//     console.log(res.data);
// })
// .catch(error => {
//     console.log(error)
// });

// PUT
// const newUser = {
//         name : "Anna Maria",
//         customer: true
//     };

// axios.put("https://jsonplaceholder.typicode.com/users/1" , newUser)
// .then(res => {
//     console.log(res.data);
// })
// .catch(error => {
//     console.log(error)
// });

// DELETE
axios.delete("https://jsonplaceholder.typicode.com/users/1")
.then(res => {
    console.log(res.data);
})
.catch(error => {
    console.log(error)
});