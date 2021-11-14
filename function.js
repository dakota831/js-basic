function greet(name, lastName) { //function can have multiple parameters
    console.log('Hello ' + name + ' ' + lastName); //body of the function
}

//John is the argument and name is the parameter

greet('John', 'Smith'); //calls the function and passes in a value
greet('Mary', 'Jane'); //function can have multiple arguments

//Performing a task
function greet(name, lastName) { //function can have multiple parameters
    console.log('Hello ' + name + ' ' + lastName); //body of the function
}

// Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2)); //2 function calls

//applications are hundreds/thousands of functions working together to provide the functionality of that applciation

//function decloration
function walk() {
    console.log("walk");
}

//Function Expression
let run = function () {
    console.log("run");
}

//hoisting is the process of moving all the declarations to the top of the current scope. 


//Function Declaration

walk();

function walk() {
  console.log("walk");
}

//Function Expression

run();

const run = function() {
    console.log("run");
};
//arguments is an array-like object

function sum() {
    let total = 0
    for (let value of arguments) {
        total += value
    }
    return total
}

console.log(sum(1, 2, 3, 4, 5));

//when you apply the rest operator to a parameter of a function. you can pass varying nuumber of arguments and put them in an array. 

// function sum(...args) {
//     console.log(args);
// }

// function sum(...args) {
//     let total = 0;

//     return args.reduce((a, b) => a + b);
// }

function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}


console.log(sum(0.1, 20, 30, 40));

//default values
//only give to the last parameter or all the parameters after the default value

function interest(principal, rate = 3.5, years) {

  return principal * rate / 100 * years;
}

console.log(interest(10000, undefined, 5));


//getters and setters

const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Dakota Torres';

//getters => access properties
//setters => change properties




console.log(person);

//error handling
//try and catch

const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error('This is not a string');
        }
        const parts = value.split('');
        if (parts.length !== 2) {
            throw new Error('Enter first and last name');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = ' ';
}
catch (e) {
    alert(e.message);
}

console.log(person);

//scope
//try to avoid declaring global variables


const color = 'red';

function start() {
    const message = 'hi';
    const color = 'blue';
    console.log(color);
}

function stop() {
    const message = 'bye';
}

start();
//let vs var
//use let and const not var
//var makes function scoped variables
//var is a global variable
//let is a block scoped variable
 
var color = "red";
let age = 30;

function sayHi() {
    console.log("hi");
}


//this references the object that is executing the code
//method -> ogj
//function -> global (window, global)

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
        console.log(this.title, tag);
        }, this);
    }
};

video.showTags();

//arrowfunctions

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};


video.showTags();

// function playVideo(video) {
//     console.log(this);
//     console.log(video);
// }

// //if function has multiple parameeters we can use call.
// //w
// playVideo.call({ name: 'Dakota' }, 1, 2);
// playVideo.apply({ name: 'Dakota' }, [1, 2]);
// const fn = playVideo.bind({ name: 'Dakota' });

// playVideo();
