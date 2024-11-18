// 1.) search functionality

// we will use ES6 -> ARROW FUNCTION

// data-type function-name = () => {  }

// youtube api = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${API-KEY}`

// re-structuring function -> basically it means that to re structure the for each function we are passing elements as parameters instead of which we will now pass the keys of the object in the form of object

// array.forEach((element) => { }) -> (({keys of the object}) => { } )
const API_KEY = `AIzaSyDKxGRHHiSWL7bfj6ttIceSlaFGikPgAmE`;
const container = document.getElementById(`container`);

const searchQuery = async () => {
  const search_input = document.getElementById(`search-input`).value;
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search_input}&key=${API_KEY}`;
  let res = await fetch(url);
  let data = await res.json();
  // console.log(data);
  let search_results = data.items;
//   console.log(search_results);
  appendItems(search_results);
};

const appendItems = (data) => {
  container.innerHTML = null;
  data.forEach(({ snippet, id: videoId }) => {
    const title = snippet.title;
    const channelTitle = snippet.channelTitle;
    const thumbnails = snippet.thumbnails;
    // const videoId = videoId;
    // console.log(videoId);

    const child_div = document.createElement(`div`);

    const video_title = document.createElement(`h4`);
    video_title.innerText = title;

    const channel_title = document.createElement(`h5`);
    channel_title.innerText = channelTitle;

    const poster = document.createElement(`img`);
    poster.src = thumbnails.high.url;

    child_div.append(poster, video_title, channel_title);

    container.append(child_div);

    // console.log(element);

    // store some data in local storage to use it in another page

    let data = {
      snippet,
      videoId,
    };
    console.log(videoId.videoId);
    
    child_div.onclick = () => {
      window.location.href = `video.html`;
      localStorage.setItem(`clicked_div`, JSON.stringify(data));
    };
  });
};
