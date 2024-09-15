let counter;
let i =0;

function Start(e){
    e.preventDefault();
    // if(counter) return;
    let container = document.getElementById('container');

    let images = JSON.parse(localStorage.getItem('images'));
    
    let img = document.createElement('img');
    
    img.src = images[i];

    container.innerHTML = null;

    counter = setInterval(function(){
        console.log(i);
        img.src = images[i];
        container.appendChild(img);
        i = (i+1) % images.length;
    }, 5);
}

function Stop(){
    clearInterval(counter);
    // counter = null;
}