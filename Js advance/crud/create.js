import {navbar} from './components/navbar.js';

let navbarDiv = document.getElementById('navbar');
navbarDiv.innerHTML = navbar();

// 301f75f669660f250bf61cfb312886c6

let imgImage = document.querySelector('#image');
imgImage.onchange = () => {
    // Image Upload to server
    imageUpload();
}

let createBtn = document.querySelector('#create_btn');
createBtn.onclick = () => {
    // Submitting a new Server
    createPost();
}

let deleteBtn = document.querySelector('#delete_btn');
deleteBtn.onclick = () => {
    deletePost();
}

let updateBtn = document.querySelector('#update_btn');
updateBtn.onclick = () => {
    updatePost();
}

let image_url;
const imageUpload = async () => {
    let img = document.getElementById('image');
    let actualData = img.files[0];
    // console.log(actualData);

    // Imgbb is asking to send data in formdata object
    let form = new FormData();
    form.append('image', actualData);

    let res = await fetch(`https://api.imgbb.com/1/upload?key=301f75f669660f250bf61cfb312886c6`,{
        method: 'POST',
        body: form
    });

    let data = await res.json();
    console.log('data', data);
    image_url = data.data.display_url;
}

const createPost = async () => {
    let id = document.getElementById('id').value;
    let caption = document.getElementById('caption').value;

    let send_this_data = {
        id,
        caption,
        image_url,
    };

    let res = await fetch('http://localhost:3000/posts',{
        method: 'POST',
        body: JSON.stringify(send_this_data),

        headers:{
            'Content-type': 'application/JSON',
        },
    });

    let data = await res.json();
    console.log('data', data);
}


const deletePost = async () => {
    let delete_id = document.querySelector('#delete_id').value;

    let res = await fetch(`http://localhost:3000/posts/${delete_id}`,{
        method: 'DELETE',
        headers:{
            'Content-type': 'application/JSON',
        },
    });
    let data = await res.json();
    console.log('data', data);
}


const updatePost = async () => {
    try{
        let update_id = document.querySelector('#update_id').value;
        let update_caption = document.querySelector('#update_caption').value;
    
        let send_this_data = {
            caption: update_caption,
        };
    
        let res = await fetch(`http://localhost:3000/posts/${update_id}`,{
            method: 'PATCH',
            body: JSON.stringify(send_this_data),
    
            headers:{
                'Content-type': 'application/JSON',
            },
        });
        let data = await res.json();
        console.log('data', data);
    }catch(err){
        console.log('err', err);
    }
}

