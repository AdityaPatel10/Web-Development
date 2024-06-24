//Higher order Function
//forEach, map, filter, reduce -> Array Method
//in<put -> Array
// let arr = [6, 7, 8, 9];
// let sweets = ["badshaw", "kova", "rasgulla", "barfi"]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//forEach(function(element, index, array){
// })

// arr.forEach(function (element, index, array) {
//     // console.log(element);
//     // console.log(index);
//     // console.log(array);
//     console.log(element, index, array);  //console.log(arr[i], i, array)
// });

// let box = [];
// let res = sweets.forEach(function(el, i, arr){
//     // console.log(el, arr);
//     box.push(arr);
//     //return el; //will return undefined / nothing
// });

// console.log(res);
// console.log(box);

//forEach -> needs extra charges, returns nothing / undefined

//map -> will return array , no extra charge

//SYNTAX -> map(function(element, index, array)) 

// let res = sweets.map(function(el, i, arr){
//     return el;  //returns array without extra charge
// });

// console.log(res);


// let arr = [6, 7, 8, 2, 10];

// let res = arr.map(function(el, i){
//     return el%2==0;
// });

//will return true ir false
// console.log(res);

//filter(function(el, i, arr))
// forEach, map, filter -> same syntax
//filter -> returning array, no extra charges
//filter and map hve same advantages

// let ress = arr.filter(function(el, i){
//     return el%2==0;
// });

// console.log(ress);

//filter will return values which satisfies given condition



// reduce -> combining all the things


// let acc = 0;  //acc = accumulator

// for (let i = 0; i < arr.length; i++){
//     acc += arr[i];
// }

// console.log(acc);
// let arr = [1, 2, 3, 4, 5];
// let acc = 10 - you can't take it like this!
// let res = arr.reduce(function(accumulator, element, index, array){
//     // accumulator = 10;-not here 
//     return accumulator + element;
// }, 10)

// console.log(res);

//with initial value -> acc = 10
//1st iteration -> 10+1 = 11 , acc = 11
//2nd iteration -> 11+2 = 13, acc = 13
//3rd iteration -> 13+3 = 16, acc = 16
//4th iteration -> 16+4 = 20, acc = 20
//5th iteration -> 20+5 = 25, acc = 25


//without initial value -> acc = arr[0] = 1
//1st iteration -> 1+2 = 3 , acc = 3
//2nd iteration -> 3+3 = 6, acc = 6
//3rd iteration -> 6+4 = 10, acc = 10
//4th iteration -> 10+5 = 15, acc = 15

//forEach, map, filter, reduce
// input - name - output
// arr[] - forEach -undefined
// [] - map - []
// [] - filter - []
// [] - reduce - single value

//output . input
// forEach().map() -> not possible as forEach returns undefined
// forEach().reduce() -> same
// map().filter() -> yes
// map().reduce() -> yes
// reduce().map() -> no bcz reduce gives single value

let arr = [1, 2, 3, 4];

console.log("Square of the elements:-");
arr.forEach(function(el){
    console.log(el*el);
})

console.log("Return an array of doubling of the elements:-");

let res = arr.map(function(el){
    return el*2;
})

console.log(res); 

console.log("Extract the number which are odd");

let out = arr.filter(function(el){
    return el%2!=0;
})

console.log(out);


console.log("Print the product of all number");

let product = arr.reduce(function(acc, el){
    return acc*el;
})

console.log(product);

console.log("Print the sum of odd number");

let func1 = function(el){
    return el%2!=0;
}
let func2 = function(acc, el){
    return acc+el;
}
let sum = arr.filter(func1).reduce(func2);
console.log(sum);  // sum of odd numbers

console.log("Print the sum of cube of number divisible of 3");

let arr1 = [1, 2, 3, 4, 5, 6]
let func3 = function(el){
    return el%3==0;
}

let func4 = function(acc, el){
    return acc+el**3;
}

let sum1 = arr1.filter(func3).reduce(func4, 0);
//acc=0
console.log(sum1);

console.log("Join firstName and lastName");

let arr2 = [
    {firstName: "Aditya", lastName: "Patel", place: "Katni" },
    {firstName: "Divyanshi", lastName: "Dutt", place: "Panipat" },
    {firstName: "Arneet", lastName: "Kour", place: "Kashmir" },
    {firstName: "Rajesh", lastName: "Soni", place: "Katni" }
];

let join = arr2.map(function(ele){
    return  ele.firstName+" "+ ele.lastName;
})

console.log(join);

console.log("Print the name of the people from the same place");

let samePlace = function(ele){
    return ele.place=="Katni";
}
let mapping = function(ele){
    return ele.firstName+" "+ele.lastName;
}
let placeValue = arr2.filter(samePlace).map(mapping);

console.log(placeValue);