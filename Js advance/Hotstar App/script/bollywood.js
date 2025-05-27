let bollywoodMovies = [
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda.',
        image: './image/bollywood/bollywood 1.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 2.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 3.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 4.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 5.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 6.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 7.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 8.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 9.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 10.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 11.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 12.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 13.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 14.webp',
        watchlistBtn: 'add to watchlist'
    },

    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 15.webp',
        watchlistBtn: 'add to watchlist'
    },{
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 16.webp',
        watchlistBtn: 'add to watchlist'
    },

    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 17.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 18.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 19.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 20.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/bollywood/bollywood 21.webp',
        watchlistBtn: 'add to watchlist'
    }
];

let bollywoodContainer = document.querySelector('.bollywood-container');

let bollywoodCards = function() {
    bollywoodMovies.forEach(function(el) {
        let card = document.createElement('div');
        card.className = 'card';

        let imgElement = document.createElement('img');
        imgElement.src = el.image;
        imgElement.className = 'card-img';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let h2 = document.createElement('h2');
        h2.innerText = el.title;
        h2.className = 'name';

        let h6 = document.createElement('h6');
        h6.innerText = el.des;
        h6.className = 'des';

        let btn = document.createElement('button');
        btn.innerText = el.watchlistBtn;
        btn.className = 'watchlist-btn';

        cardBody.append(h2, h6, btn);
        card.append(imgElement, cardBody);
        bollywoodContainer.append(card);
    });
}
bollywoodCards();



