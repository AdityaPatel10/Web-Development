let slideshow = document.getElementById(`slideshow`);
let imgs = ["https://m.media-amazon.com/images/M/MV5BZGMwMWZjYzctZTNjOS00M2NiLTlmOGMtMDUyY2FkZjEwMTY3XkEyXkFqcGc@._V1_QL75_UX820_.jpg", "https://m.media-amazon.com/images/M/MV5BZDkyMzQ4ZGEtOTJkYi00YjAzLTg1YmQtOTk4ZGU0MjdhOGM2XkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BOGI4NzE2MWEtM2U3Zi00YTA5LWE0MzctNmFiYTNmODFkZmNlXkEyXkFqcGc@._V1_QL75_UY281_CR0,0,500,281_.jpg", "https://m.media-amazon.com/images/M/MV5BY2E5NjU1NWMtY2M4ZS00NmRlLTk5M2YtZmI2N2I2NzllMTc2XkEyXkFqcGdeQWJpbndhYWtz._V1_QL75_UX500_CR0,0,500,281_.jpg"]

let images = JSON.parse(localStorage.getItem('images')) || [];

imgs.forEach(function(el){
    images.push(el);
    localStorage.setItem(`images`, JSON.stringify(images));
});

let i = 0;
let img = document.createElement(`img`);
function slideShow(){
    img.src = images[i];
    slideshow.appendChild(img);
    i = (i+1) % images.length;
}

setInterval(slideShow, 2000);

async function searchMovie(){
    let search = document.getElementById('search_input').value;
    console.log(`Search: `, search);
    
        try{
            let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4f6ccea9&s=${search}`)
            let data = await res.json();
            let final_data = data.Search;
            appendMovie(final_data);
            console.log(`Movie: ${final_data}`);
            
        }
        catch(err){
            console.error(`Error: ${err}`);
        }
    }
    
    let cuersal = document.getElementById('cuersal');
    function appendMovie(data){
        cuersal.innerHTML = null;
        if(data == undefined) return false;
        data.forEach(function(el){
            let div = document.createElement('div');
            // div.innerHTML = null;
            let poster = document.createElement('img');
            poster.src = el.Poster;
            let title = document.createElement('h3');
            title.innerText = `Title: ${el.Title}`;
            let year = document.createElement('p');
            year.innerText = `Year: ${el.Year}`;
            div.append(poster, title, year);
            cuersal.append(div);
        })
    }
    
    //Debouncing
    
    let id;
    function debounce(func, delay){
        if(id){
            clearTimeout(id);
        }
        id = setTimeout(function(){
            func();
        }, delay);
    }