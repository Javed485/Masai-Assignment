import {navbar} from './components/navbar.js';
import {append} from './scripts/append.js';

let navbarDiv = document.getElementById('navbar');
navbarDiv.innerHTML = navbar();


let posts_div = document.querySelector('#posts');
const getData = async () => {
    let res = await fetch(`http://localhost:3000/posts`);
    let data = await res.json();
    // append(data, posts_div); 
    createButtons(data.length, 2);
};

const getPaginationData = async (clicked_button, limit) => {
    let res = await fetch(`http://localhost:3000/posts?_page=${clicked_button}&_limit=${limit}`);
    let data = await res.json();
    append(data, posts_div); 
};

getData();
getPaginationData(1, 2);

let buttons_div = document.querySelector('#buttons');
const createButtons = (total_image, image_per_page) => {
    const buttons = Math.ceil(total_image / image_per_page);

    for(let i = 1; i<= buttons; i++){
        let btn = document.createElement('button');

        btn.id = i;
        btn.innerText = i;
        btn.onclick = () => {
            // console.log(i);
            getPaginationData(i, 2);
        }

        buttons_div.append(btn);
    }
}


