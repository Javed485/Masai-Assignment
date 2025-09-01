
import navbar from './components/navbar.js';
let div_navbar = document.querySelector('#navabr');
div_navbar.innerHTML = navbar();

let div_search = document.querySelector('#searchBtn');
div_search.style.display = 'none';

let inputBox = document.querySelector('#movie_name');
inputBox.addEventListener('input', function(){
    debounce(searchMovie, 2000);
})

async function searchMovie(){
    let loader_div = document.getElementById('loader_div');
    loader_div.style.display = 'block';

    let movie = document.getElementById('movie_name').value;
    try{
        let response = await fetch(`http://www.omdbapi.com/?apikey=f3d5c71f&s=${movie}`);
        let data = await response.json();
        let actualData = data.Search;
        // console.log('actualData', actualData);
        appendMovie(actualData);
    }
    catch(err){
        console.log('err', err);
    }
}

function appendMovie(data){
    let loader_div = document.getElementById('loader_div');
    loader_div.style.display = 'none';

    let movie_div = document.getElementById('movie');
    movie_div.innerHTML = null;
    data.forEach(function(el){
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.Poster;

        let p_name = document.createElement('p');
        p_name.innerText = el.Title;

        div.append(img, p_name);
        movie_div.append(div);
    });
}

let id;
function debounce(funRun, delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        funRun();
    }, delay);
}





