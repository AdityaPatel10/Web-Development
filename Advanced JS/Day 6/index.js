//Promises

//1. promise will not be fullfilled -> fear of everyone
//2. promise will be fullfilled.
//3. pending state, processing state.

//why do we need promises in javascript?

//time x promise

// function download(url){
//     console.log(`Downloading ${url}`);
//     process(url);
// }

// download(url);

//downloading will take time

//3. process() should run only when download() is done. -> will be done useing call back function
//js -> execute a function after the execution of first function

// let url = `http://img.net/js`;

// // function process(picture){
// //     console.log(`Processing ${picture}`);
// // }

// // // download(url, callback function).

// // function download(url, callback){
// //     setTimeout(function(){
// //         console.log(`Downlaoding ${url}`);
// //         callback(url);
// //     }, 3000);
// // }

// // download(url, process);

// //what if we have mutiple photos

// let url1 = `http://img.net/js1`;
// let url2 = `http://img.net/js2`;
// let url3 = `http://img.net/js3`;
// let url4 = `http://img.net/js4`;

// // function process(picture){
// //     console.log(`Processing ${picture}`);
// // }

// // download(url, callback function).

// function download(url, callback){
//     setTimeout(function(){
//         console.log(`Downlaoding ${url}`);
//         callback(url);
//     }, 3000);
// }

// download(url1, function process(picture){
//     console.log(`Processing ${picture}`);

//     download(url2, function process(picture){
//         console.log(`Processing ${picture}`);

//         download(url3, function process(picture){
//             console.log(`Processing ${picture}`);

//             download(url4, function process(picture){
//                 console.log(`Processing ${picture}`);

//                 //This is cold as prymid doom, callback head

//             });
//         });
//     });
// });

// PROMISES

// executes a function after first function is done.

let url = `http://img.net/js`;

function process(picture) {
  console.log(`Processing ${picture}`);
}

//download is a promises

//re-write download as a promise

//we don't need a call back here

function download(url) {
  //promise is an object

  return new Promise(function (resolve, reject) {
    //resolve - success
    //reject - failure

    setTimeout(function () {
      console.log(`Downloading ${url}`);
      resolve(url);
    }, 3000);
  });
}

let myPromise = download(url);
myPromise.then(function (response) {
  process(url);
}).catch(function (error){
    console.log(`Error `, error);
    
})


//promise takes time.

//when prommise is successfull ( resolve ), .then

//when promise is unsuccessful ( reject ), .catch
