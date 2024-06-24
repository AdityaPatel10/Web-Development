// function sayHi() {
//     console.log('Hi');
// }

// sayHi();   //funcyion statement

// let name = "Aditya";
// let mob = 999999;
// let flag = true;
// let arr = [1, 2, 3, 4];
// let obj = {name: "Aditya", age: 22};


// //function expression
// let func = function () {    //Anonymous function
//     //console.log('hello world');
//     let res = "Hello World";
//     return res;
// };

// console.log(func()); 

// function Name(name, age, func){  //parameter
//     func();
//     console.log("My name is: "+name+" & i am "+age+" year old");
// }

// Name("Aditya", 21, statement);  //Argument

// function statement(){
//     console.log("I am good.");
// }


//execution line -> 28 -> 23 -> 24 -> 30


function Hotel(a, b, c, d){
    console.log("Welcome to Hotel");
    a();
    b();
    c();
    d();
}

Hotel(menuCard, soup, starter, mainCourse);

function menuCard(){
    console.log("Bring Menu Card");
}

function soup(){
    console.log("Bring Soup");
}

function starter(){
    console.log("Bring Starter");
}

function mainCourse(){
    console.log("Bring Indian Thali");
}


//execution line -> 46-> 38 -> 39 -> 40 -> 48 -> 49 -> 41 -> 52 -> 53 -> 42 -> 56 -> 57 -> 43 -> 60 -> 61