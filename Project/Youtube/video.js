const video_details_div = document.getElementById(`video-details`)
const videos = () => {
    let {videoId:{videoId}} = JSON.parse(localStorage.getItem(`clicked_div`)) || [];
    console.log(videoId);
    
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/nWed2eTY7_Q?si=Ij3wFLU4cNzFTBlv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    let iframe = document.createElement(`iframe`);
    iframe.width = `560`;
    iframe.height = `315`;
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.setAttribute(`allowfullscreen`, true);
    video_details_div.append(iframe);
}