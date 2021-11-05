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