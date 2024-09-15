// FETCH -> grab and get back.

// it is a two way process

//GOA

// 0. Permission

// 1. car
// 2. map(route)


// fetch is our - allows you to go somewhere -> destination is server. ( someone who serves - data )


// arguments
// return something
// destroyed

//url is the server / identify of a server.

let url = `https://fakestoreapi.com/products/category/electronics`

// fetch(url).then(function (res){
//     return res.json(); //it is only collecting the data nothing else and it will take some time.
// }).then(function(res){
//     console.log(`res: `, res);
// }).catch(function(err){
//     console.error(`err: `, err);
// });

//readablestream

//stream - flow of droplets.

//information make sense only when you collect it.



// console.log(`x: `, x);

//fetch is a promise

//fetch is like a gift


//fetch() for API

//async await

async function getData(){
    try{
        let res = await fetch(url);
        // console.log(`res: `, res);
        let data = await res.json();
        console.log(`data `, data);
    }
    catch{
        console.error(`err: `, err);
    }
}

getData()