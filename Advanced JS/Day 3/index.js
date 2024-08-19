//architecture of js is basically inheritance

//inheritance - sharing some properties to child

//does hierarchy exist??

//strings, number, arrays - child

//object - father

//grandfather - built in object from js

//great grandfather - null



//inheritance using CF

// function nikeProduct(n, p){
//     this.name = n
//     this.price = p
//     this.brand = 'Nike'
// }

// nikeProduct.prototype.offer = function(){
//     if(this.price > 10000){
//         console.log('Offer is applicable')
//     }
//     else{
//         return false
//     }
// }

// //p1 is the child of nikeProduct and it is child of prototype

// let p1 = new nikeProduct('Shoes', 8000)
// console.log('p1:', p1);
// p1.offer()
// //js itself stores methods / functions on prototype

// nikeProduct.prototype

//properties are stored in actual object

//prototype - inheritance

//create a students from CF add a method submit-assignment.


// function Students(n, c){
//     this.name = n
//     this.course = c
//     this.assignment = 0
// }

// Students.prototype.submitAssignment = function(){
//     this.assignment++
//     console.log('Assignment:', this.assignment);
    
// }

// let s1 = new Students('Aditya', 'CSE')
// console.log('s1:', s1);

// s1.submitAssignment()
// s1.submitAssignment()

//object.create() -> object

//comes from another object

// let nike_product = {
//     name : 'sneakers',
//     brand : 'nike',
//     seller : 'flipkart',
// };

// let n1 = Object.create(nike_product)
// n1.price = 80000
// console.log('n1:', n1);

//1. Object.create() -> parent object.
//2. CF -> prototype to set on an object

//create a cycle

//raw material + brain

//do yo understand how a cycle is made?

//reverse engineering

//to create array, you need to study an array.

// let arr = [1, 2, 3]
// console.log('array: ', arr);


// let arr = new Array(1, 2, 3)
// console.log('array', arr);

//fact : CF RETURNS object


//1. array has indexes, key value pairs - array ia an object

//2. all of its method are stored in its prototype

// let arr = new Array(1, 2, 3)


//1. does Array() have parameters?

//2. my clone, myArray should also have parameters

//3. how can i read those arguments dynamically

// function myArray(){
//     // console.log(arguments);

//     Object.defineProperty(this, 'length', {
//         enumerable : false //enumerable means countable or add length with the elements
//     })

//     this.length = arguments.length
//     for(let i = 0; i < arguments.length; i++){
//         this[i] = arguments[i]
//     }
    
// }

// let arr = new myArray('aditya', 21, 'BE-CSE')
// console.log('myArray:', arr)

// //myArray is a CF


// myArray.prototype.pus = function(value){
//     //we push at end
//     let index = this.length
    
//     this[index] = value
//     this.length++

//     console.log(this);
    
// }

// arr.pus(6)

//lets manipulate js Array

// let arr = new Array(1, 2, 3)

let arr = [1, 2, 3]
console.log('arr:', arr);
Array.prototype.sayHi = function(){
    console.log('Manipulating');
}
arr.sayHi()
