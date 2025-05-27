let channels = [
    {
        image: './image/channel/channel 1.webp',
    },
    {
        image: './image/channel/channel 2.webp',
    },
    {
        image: './image/channel/channel 3.webp',
    },
    {
        image: './image/channel/channel 4.webp',
    },
    {
        image: './image/channel/channel 5.webp',
    },
    {
        image: './image/channel/channel 6.webp',
    },
    {
        image: './image/channel/channel 7.webp',
    },
    {
        image: './image/channel/channel 8.webp',
    },
    {
        image: './image/channel/channel 9.webp',
    },
    {
        image: './image/channel/channel 10.webp',
    },
    {
        image: './image/channel/channel 11.webp',
    },
    {
        image: './image/channel/channel 12.webp',
    },
    {
        image: './image/channel/channel 13.webp',
    },
    {
        image: './image/channel/channel 14.webp',
    },{
        image: './image/channel/channel 15.webp',
    },
    {
        image: './image/channel/channel 16.webp',
    }
];

let channelsContainer = document.querySelector('.channel-container');

let channelsCards = function() {
    channels.forEach(function(el) {
        let card = document.createElement('div');
        card.className = 'channel-card';

        let imgElement = document.createElement('img');
        imgElement.src = el.image;
        imgElement.className = 'channel-img';

        card.append(imgElement);
        channelsContainer.append(card);
    });
}
channelsCards();



