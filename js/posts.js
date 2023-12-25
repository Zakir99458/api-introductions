function loadPosts(){
    try{
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(Response => Response.json())
       .then(postsData => displayPosts(postsData))
    }
    catch(e){
        console.log(e);
    }
    
}

function displayPosts(postsData){
    const postContainer = document.getElementById('posts');
    for(post of postsData){
        const div = document.createElement('div');
        div.classList.add('posts');
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
 
    console.log(postsData);
}

loadPosts();