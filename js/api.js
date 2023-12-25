// console.log("API.js");
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
}

function loadUsers (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
}

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resPosts => resPosts.json())
    .then(posts =>console.log(posts))
}