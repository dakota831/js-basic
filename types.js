//Primitive Types
//String, Number, Boolean, Null, Undefined

let name = 'Dakota'; //String literal
let age = 28; //Number literal
let isCool = false; //Boolean literal - True or False
let firstName = undefined; //Undefined literal
let selectedColor = null; //Null literal - clear variable value
//All numbers are of type number/float


//primitives are copied by value
//objects are copied by reference

//shared variables
let obj = { value:10};

function increase(obj) {
  ob.value++;
}
increase(obj);
console.log(obj);


// //two independent varialbes
// let number=10;
// function increase(number) {
//   number++;
// }
// increase(number);
// console.log(number);