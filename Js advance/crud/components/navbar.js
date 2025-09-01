const navbar = () => {
    return`
    <div id="logo">
        <a href="/">
            <img src="images/download.png" alt="">
        </a>
    </div>
    <div id="search">
        <input type="text">
    </div>
    <div id="options">
        <a href="create.html">
            <button id="submit">Create Post</button>
        </a>
    </div>`;
};

export { navbar };


