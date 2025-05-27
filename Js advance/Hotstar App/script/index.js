let preload = document.getElementById('preloader');
    window.addEventListener("load", function(){
        preload.style.display = 'none';
    });


let movies = [
    {
        name: 'aoashi',
        title: 'Select Picks: Comedy',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/slider-pics/aoashi.webp'
    },
    {
        name: 'Begum Jaan',
        title: 'Hindi Drama 2017',
        des: 'A brothel stands in the way of the partition line. While the authorities try all means to oust the prostitutes, they stand their ground.',
        image: './image/slider-pics/begum-jaan.webp'
    },
    {
        name: 'ezra',
        title: 'hindi horroe 2007',
        des: 'Priya has recently moved to Kochi along with her husband and brings along an antique Jewish trunk, unaware that it contains a dybbuk, a revenge-hungry spirit.',
        image: './image/slider-pics/ezra.webp'
    },
    {
        name: 'taaza khabar',
        title: 'Hotstar special: Fantasy',
        des: 'A public toilet caretaker`s poverty-stricken life takes a drastic U-turn when he helps an old woman. How long will fate smile upon him ?',
        image: './image/slider-pics/taaza-khabar.webp'
    },
    {
        name: 'rain or shine',
        title: 'Select Picks: Romence',
        des: 'In the rubble of tragedy, Gang-du and Mun-su find common ground of hope.',
        image: './image/slider-pics/rain-or-shine.webp'
    }
];

let carousel = document.querySelector('.carousel');
let sliders = [];
let sliderIndex = 0;

let createSlide = () => {
    if(sliderIndex >= movies.length){
        sliderIndex = 0;
    } 
    // Creating Dom Element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let ms = document.createElement('p');
    let p = document.createElement('p');
    // Attaching all Elements
    imgElement.appendChild(document.createTextNode(''));  
    h1.appendChild(document.createTextNode(movies[sliderIndex].name));
    ms.appendChild(document.createTextNode(movies[sliderIndex].title));
    p.appendChild(document.createTextNode(movies[sliderIndex].des));
    content.appendChild(h1);
    content.appendChild(ms);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
    // Setting up Image
    imgElement.src = movies[sliderIndex].image;
    sliderIndex++; 

    // Settinig Elements classname
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    ms.className = 'movie-special';
    p.className = 'movie-des';

    sliders.push(slide);   

    // Adding sliding effort
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length -2)}px)`;
    }
}

for(let i=0; i<=movies.length; i++){
    createSlide();
};

setInterval(function(){
    createSlide();
}, 3000);

// Video Cards
let videoCard = [...document.querySelectorAll('.video-card')];
videoCard.forEach(function(item){
    item.addEventListener('mouseover', function(){
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', function(){
        let video = item.children[1];
        video.pause();
    })
})

// cards sliders
let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach(function(item, i){
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', function() {
        item.scrollLeft = item.scrollLeft + containerWidth - 200;
    })

    preBtns[i].addEventListener('click', function() {
        item.scrollLeft -= containerWidth + 200;
    })
})

