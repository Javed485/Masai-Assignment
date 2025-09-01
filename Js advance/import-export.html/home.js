
    import navbar from './components/navbar.js';
    let div_navbar = document.querySelector('#navabr');
    div_navbar.innerHTML = navbar();

    let carousel_div = document.getElementById('carousel');
    // Carousel Function
    function carousel(){
        let images = ['https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg','https://cdn.wallpapersafari.com/88/43/nBPdKr.jpg','https://wallpaperaccess.com/full/37945.jpg']; // Create Array
        let imgElement = document.createElement('img'); // Create Element with Img
        imgElement.src = images[0];  // First Image fix
        carousel_div.append(imgElement);
        let i = 1;
        setInterval(function(){
            if(i == images.length){
                i = 0;
            }
            imgElement.src = images[i];
            carousel_div.append(imgElement);
            i++;
        }, 3000);
    }
    carousel();

    let movies = [
        {
            name: 'Munna Michael',
            rating: 5.5,
            url: 'https://www.postproductioninstitute.com/wp-content/uploads/2020/01/rajeev-chudasama.jpg'
        },
        {
            name: 'Mohanjodaro',
            rating: 6,
            url: 'https://i.pinimg.com/236x/97/5a/f2/975af26c337b52bf88b701631bddc99e--mohenjo-daro-movieposter.jpg'
        },
        {
            name: 'PK',
            rating: 9.5,
            url: 'https://bollywoodcinemaposter.com/wp-content/uploads/20171126_121714.jpg'
        },
        {
            name: 'Kabir Singh',
            rating: 8.5,
            url: 'https://5.imimg.com/data5/CO/IP/MQ/SELLER-30220222/bollywood-wall-poster-500x500.jpg'
        },
        {
            name: 'Action Juction',
            rating: 8,
            url: 'https://im.idiva.com/photogallery/2014/Dec/actionjackson.jpg'
        },
        {
            name: 'Raees',
            rating: 8.7,
            url: 'https://www.whoa.in/download/raees-shah-rukh-khan-bollywood-movies-poster'
        },
        {
            name: 'Holiday',
            rating: 8.9,
            url: 'https://i.pinimg.com/236x/ab/70/9b/ab709b432e40b76a05ed57daf227790b--hindi-movies-online-bollywood-posters.jpg'
        },
        {
            name: 'Kabil',
            rating: 7.7,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwhrgBEYFJzOoi4pE1OFhRyfNkP9D7uD-ZaQ&usqp=CAU'
        }
    ];

    function appendMovie(data){
        let loader_div = document.getElementById('loader_div');
        loader_div.style.display = 'none';

        let movies_div = document.getElementById('movies');
        movies_div.innerHTML = null;
        data.forEach(function(el){
            let div = document.createElement('div');

            let img = document.createElement('img');
            img.id = 'poster';
            img.src = el.url;

            let m_name = document.createElement('p');
            m_name.innerHTML = `Name: ${el.name}`;

            let m_rating = document.createElement('p');
            m_rating.innerHTML = `Rating: ${el.rating}`;

            div.append(img, m_name, m_rating);
            movies_div.append(div);
        })
    }

    // Sorting Low to High
    function sortLH(){
        let data = movies.sort(function(a,b) { 
            return a.rating - b.rating
        } );
        appendMovie(data);
    }
    // Sorting High to Low
    function sortHL(){
        let data = movies.sort((a,b) => { return b.rating - a.rating });
        appendMovie(data);
    }
    // promisee Function
    let getmeData = new Promise(function(resolve, reject){
        setTimeout(function(){
            let data = movies;
            if(data != null){
                resolve(data);
            }else{
                reject('ERR: Sever could not get movies data');
            }
        }, 3000);
    });
    getmeData
        .then(function(success){
            appendMovie(success);
        })
        .catch(function(error){
            console.log('error:', error);
        })
