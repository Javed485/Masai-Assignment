// async function searchMovie(){
//     let movie = document.getElementById('movie_name').value;
//     let response = await fetch(`http://www.omdbapi.com/?apikey=f3d5c71f&s=${movie}`);
//     // console.log('response:',response);

//     let data = await response.json();
//     let actualData = data.Search;
//     console.log('actualData', actualData);
// }

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