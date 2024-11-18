// movies data
//append(data)
//slideshow

//promise - function is dependent on another function

//1. slidshow
//3. getData
//2. appendMovies


//write a promise that you will get the data .then you will append it


//for appending the data

// main container who will append all the small divs od boxes

//we will use for each method

// will create small boxes for all the elements we have in our server or local storage

//we will then get the essential data of the movies like name movie poster rating and will store it in one single div using append function

//after that we will append all the small divs or boxes to tha main container

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


async function addList(name, year){
    try{
        let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4f6ccea9&s=${name}&y=${year}`);
        let data = await res.json();
        let final_data = data.Search;
        console.log(final_data);
        appendMovie(final_data);
    }
    catch(err){
        console.error(`err: `, err);
    }
}

addList("Kill Victoria", 2024);
addList("avenger", 2024);
addList("golmaal", 2008);
addList("cuttputlli");
addList("kabir singh", 2019);
addList("mirzapur", 2018);
addList("phir hera pheri");
addList("Doctor Strange", 2022);

let movie_list = document.getElementById('movie_list');
function appendMovie(data){
    data.forEach(function(el){
        let div = document.createElement('div');
        let poster = document.createElement('img');
        poster.src = el.Poster;
        let title = document.createElement('h3');
        title.innerText = `Title: ${el.Title}`;
        let year = document.createElement('p');
        year.innerText = `Year: ${el.Year}`;
        div.append(poster, title, year);
        movie_list.append(div);
    })
}


// async function searchMovie(){
// let search = document.getElementById('search_input').value;
// console.log(`Search: `, search);

//     try{
//         let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4f6ccea9&s=${search}`)
//         let data = await res.json();
//         let final_data = data.Search;
//         appendMovies(final_data);
//         console.log(`Movie: ${final_data}`);
        
//     }
//     catch(err){
//         console.error(`Error: ${err}`);
//     }
// }

// let cuersal = document.getElementById('cuersal');
// function appendMovies(data){
//     cuersal.innerHTML = null;
//     if(data == undefined) return false;
//     data.forEach(function(el){
//         let div = document.createElement('div');
//         // div.innerHTML = null;
//         let poster = document.createElement('img');
//         poster.src = el.Poster;
//         let title = document.createElement('h3');
//         title.innerText = `Title: ${el.Title}`;
//         let year = document.createElement('p');
//         year.innerText = `Year: ${el.Year}`;
//         div.append(poster, title, year);
//         cuersal.append(div);
//     })
// }

//Debouncing

// let id;
// function debounce(func, delay){
//     if(id){
//         clearTimeout(id);
//     }
//     id = setTimeout(function(){
//         func();
//     }, delay);
// }

function invokeSearch(){
    let rewoke = document.getElementById('myAnchor');
    rewoke.setAttribute("href", "./search.html");
    // rewoke.innerText = "Search";
    document.getElementById("search").appendChild(rewoke);
    console.log("dbjhdcva");
    
}