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