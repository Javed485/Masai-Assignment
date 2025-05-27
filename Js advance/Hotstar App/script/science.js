let scienceMovies = [
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda.',
        image: './image/science/science 1.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 2.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 3.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 4.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 5.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 6.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 7.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 8.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 9.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 10.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 11.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 12.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 13.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 14.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 15.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 16.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 17.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 18.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 19.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 20.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 21.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 22.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/science/science 23.webp',
        watchlistBtn: 'add to watchlist'
    }
];

let scienceContainer = document.querySelector('.science-container');

let scienceCards = function() {
    scienceMovies.forEach(function(el) {
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
        scienceContainer.append(card);
    });
}
scienceCards();



