
// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]'

const searchVideos = async () =>{

 try{
  const API_KEY = 'AIzaSyAgpsGr6SSUjeso2ua6BfAZYdkHUE5chX8';
  let search_term = document.querySelector('#input').value;
  
  let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search_term}&key=${API_KEY}`);
  let data = await response.json();
  let actualData = data.items;
  // console.log(actualData);
  appendVideos(actualData);
 }catch(err){
  console.log(err);
 }
}

const container = document.querySelector('.container');

const appendVideos = (data) =>{
  container.innerHTML = null;
  data.forEach(({snippet, id: {videoId}})=>{
    let div = document.createElement('div');

    let p_title = document.createElement('p');
    // p_title.innerText = el.snippet.title;
    p_title.innerText = snippet.title;

    let p_channel = document.createElement('p');
    p_channel.innerText = snippet.channelTitle;

    let thumbnail = document.createElement('img');
    thumbnail.src = snippet.thumbnails.high.url;

    div.append(thumbnail, p_title, p_channel);
    container.append(div);

    div.onclick = () =>{
      let data = {
        snippet,
        videoId,
      };
      data = JSON.stringify(data);
      localStorage.setItem('clicked_video', data);
      window.location.href = 'video.html';
    };
  });
};


