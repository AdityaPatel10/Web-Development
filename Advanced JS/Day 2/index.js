//constructor - to build
// what are we building - object

// console.log(this);

//this - global object
//global - access to everything (  )
//object - store key value pairs

//global object
// function func(){
//     var age = 15;
//     // console.log(age);
//     console.log(this);
// }
// func();

// CREATE A FUNCTION WHICH RETURNS AN OBJECT

// function returnObject(n, p, t) {
//   let nike = {
//     name: n,
//     price: p,
//     type: t,
//   };
//   return nike;
// }
// let obj = returnObject("shoes", 50000, "sneakers");
// console.log(obj);

//resolve above question using constructor function

// function Constructor(n, p, t) {
//   this.name = n;
//   this.price = p;
//   this.type = t;
// }

//constr -> this

//return -> new - keyword

// let constr = new Constructor("football", 1200, "rounded");
// console.log(constr);

//Constructor function can create object.
//CF can act as blueprint.

//When we use new keyword, it creates a new empty object and assigns it to the variable.
//Then, it calls the constructor function with the provided arguments and assigns the returned value to the newly created object.

// call, apply, bind

//call -> function

//CAB are related to functions.
// properties available in functions.

// let kitchen = {
//   name: "kitchen",
//   purpose: "cook",

//   cookFood(order) {
//     console.log(`Serving ${order} in ${this.name}`);
//   },
// };

// let bedroom = {
//   name: "bedroom",
//   purpose: "sleep",
// };

// //what if, you can access kitchen from bedroom?
// //how can i access method of one object ( kitchen ) on another object ( bedroom )
// //call
// //call, apply, bind can help you to do that.

// //object.function

// kitchen.cookFood('Pasta');

// //serving maggie in bedroom
// //this -> kitchen
// //this -> bedroom we wanted it
// //how can i change the value of this

// kitchen.cookFood.call(bedroom, 'maggie')

let person1 = {
  name: "raju",
};
let person2 = {
  name: "babu bhaiya",
};
let person3 = {
  name: "kachra seth",
};

function ringBell(day, action) {
  console.log(`${this.name} rang the bell on ${day} and ${action}`);
}

ringBell.call(person1, "thu", "ran"); //raju rang the bell
// ringBell.call(person3); //this -> person3

//this keyword will always point to the object

//APPLY

ringBell.apply(person2, ["thu", "ran"]);

//BIND

//new value of 'this' object

let x = ringBell.bind(person3, 'thu', 'ran');
// console.log('x', x);
x()


//if it is 
//call - comma
//apply - array
//bind - bomma

//CAB are related to function

//CAB are properties available on function ( if function itself is an object )

//what do they allow us to do?
//they allow us to change the value of 'this' keyword inside a function