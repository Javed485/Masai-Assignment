let latestShows = [
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda.',
        image: './image/latest/latest 1.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 2.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 3.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 4.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 5.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 6.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 7.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 8.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 9.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 10.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 11.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 12.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 13.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 14.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 15.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 16.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 17.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/latest/latest 18.webp',
        watchlistBtn: 'add to watchlist'
    }
];

let latestContainer = document.querySelector('.latest-container');

let latestShowsCards = function() {
    latestShows.forEach(function(el) {
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
        latestContainer.append(card);
    });
}
latestShowsCards();
