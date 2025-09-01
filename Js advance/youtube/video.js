const showClickedVideo = () => {
	let data = localStorage.getItem('clicked_video');
	let {videoId} = JSON.parse(data);
	// console.log(actualData);

	let iframe = document.createElement('iframe');
	iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

	iframe.width = '100%';
	iframe.height = '80%';
	iframe.allowfullscreen = true;
	iframe.allow = 'autoplay; encrypted-media';

	let video_div = document.querySelector('.video-detail');
	video_div.append(iframe);
}
