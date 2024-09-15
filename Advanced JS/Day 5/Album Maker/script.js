

function createAlbum(e){
    e.preventDefault();

    let imageURL = document.getElementById('url').value;
    let images = JSON.parse(localStorage.getItem('images')) || [];

    images.push(imageURL);

    localStorage.setItem('images', JSON.stringify(images));
}