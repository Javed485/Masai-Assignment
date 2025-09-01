const append = (data, container) => {
    container.innerHTML = null;

    data.forEach(({caption, image_url}) => {
        let div = document.createElement('div');
        div.classList.add('div_insta');

        let caption_p = document.createElement('p');
        caption_p.innerText = caption;

        let image = document.createElement('img');
        image.src = image_url;

        div.append(image, caption_p);
        container.append(div);
    });
};

export { append };


