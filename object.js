//Example of object made of two variables
let name = 'Dakota'; 
let age = 28; 


let person = {
    name: 'Dakota',
    age: 28
};

// Dot notation - Concise , default choice
person.name = 'John';

// Bracket notation - input target property at runtime by user
let selection = 'name';
person[selection] = 'Mary';


//Object Oriented Programming (OOP)
//
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true, 
  draw: function() {
    console.log('draw');
  },
};

circle.draw(); //Method

//camel notation: oneTwoThree
//pascal notation: OneTwoThree


//Factory Function
function createCircle(radius) {
    return {
      radius,
      draw() {
        console.log('draw');
      }
    };
  }
  
  const myCircle = createCircle(1);
  
  //constructor function (pascal notation)
  function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
      console.log('draw');
    };
  }
  
  const circle = new Circle(1);

  //Change Circle Object by adding or removing properties

const circle = {
  radius: 1,
};

circle.color = 'yellow';
circle.draw = function() {}

delete circle.color;
delete circle.draw;


console.log(circle);


//Every object has a constructor property and it points to the function that created the object
//let x = new Object();
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 0, -1, NaN, Infinity

//In Javascript, functions are objects.

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);


const circle = {
  radius: 1,
  draw() {
      console.log('draw');
  }
};

for (let key in circle) {
  console.log(key, circle[key]);
}

//objects are not iterable

for (let key of Object.keys(circle)) {
  console.log(key);
}

for (let entry of Object.entries(circle)) {
  console.log(entry);
}

if ('color' in circle) {
  console.log('yes');
}


const circle = {
  radius: 1,
  draw() {
      console.log('draw');
  }
};

// const another = {};

// for (let key in circle)
//     another[key] = circle[key];

// const another = Object.assign({}, circle);
//used to clone an object or conbine multiple objects into one

const another = { ...circle };
//spread operater used to spread an object into a new object


console.log(another);


// //string primative
// const message = "This is my first message";

// // //String object
// // const another = new String("Hello World");

// //escape characters help us to print out special characters

// //Object literals {}
// //Boolean true or false
// //String " ", ' '
// //Template ``

// const another = 
// `This is my
// first message`;

//date object
const now = new Date();
const date1 = new Date('May 11 2018 09:00AM')
const date2 = new Date(2018, 4, 11, 9)

now.setFullYear(2017);

