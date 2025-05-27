let kidsMovies = [
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda.',
        image: './image/kids/kid 1.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 2.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 3.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 4.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 5.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 6.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 7.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 8.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 9.jpeg',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 10.jpg',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 11.jpg',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 12.jpeg',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 13.jpg',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 14.webp',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 15.jpg',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 16.jpeg',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 17.jpg',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/kids/kid 18.webp',
        watchlistBtn: 'add to watchlist'
    }
];

let kidsContainer = document.querySelector('.kids-container');

let kidsCards = function() {
    kidsMovies.forEach(function(el) {
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
        kidsContainer.append(card);
    });
}
kidsCards();



