
let selectedColors = ['red', 'blue', 'green'];
selectedColors[2] = '1';
console.log(selectedColors.length);

//array literal
//arrays are dynamic and can include different types of data
//arrays are objects
//arrays are data structers used to represent a list of items

//Adding elements to an array
const numbers = [3, 4];

//End
numbers.push(5, 6);


//Beginning
numbers.unshift(1, 2);


//Middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);



//finding primitives
// const numbers = [1, 2, 3, 4];

// numbers.indexOf(2); // 1
// numbers.lastIndexOf(2); // 1
// numbers.indexOf(1) !== -1; // true
// numbers.includes(2); // true


//finding refrence types
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

courses.includes({ id: 1, name: 'a' }); // false
const coarse = courses.find(function (course) {
    return course.id === 1;
}
); // { id: 1, name: 'a' }

console.log(coarse);

//removing elements
const numbers = [1, 2, 3, 4];

//End
const last = numbers.pop();

//Beginning
const first = numbers.shift();

//Middle
const middle = numbers.splice(2, 1);

console.log(numbers);

//emptying an array
let numbers = [1, 2, 3, 4, 5];
let another = numbers;  // another is a reference to numbers
//Solution 1 - single reference
// numbers = [];

//Solution 2 - multiple references
// numbers.length = 0;

//Solution 3 - noisy solution
numbers.splice(0, numbers.length);

//Solution 4 - performance cost
// while (numbers.length > 0) {
//   numbers.pop();
// }

console.log(numbers);
console.log(another);

//combining arrays
const first = [{id: 1}];
const second = [4, 5, 6];

const combined = first.concat(second);
first[0].id = 10;

const slice = combined.slice(2, 4);

console.log(combined);
console.log(slice);

//primitives are copied.
//objects are references. and not copied over.


//spread operator

const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, 'a', ...second. 'b'];

// const copy = combined.slice();
const copy = [...combined];



//iterate an array
const numbers = [1, 2, 3];

for (let number of numbers) {
  console.log(number);
}

//or
//can display indexes

numbers.forEach((number, index) => console.log(index, number)
);

//joined / combining 
const numbers = [1, 2, 3];
const joined = numbers.join(','); // "1,2,3"
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' '); // ["This", "is", "my", "first", "message"]
console.log(parts);

const combined = parts.join('-');
console.log(combined);

//useful for url slugs

// //sorting arrays 
// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// //reverse method
// numbers.reverse();
// console.log(numbers);

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javaScript' },
];

// console.log(courses.sort((a, b) => a.id - b.id));
courses.sort((function(a, b) {

const nameA = a.name.toUpperCase();
const nameB = b.name.toUpperCase();


    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}
));
console.log(courses);

//testing elements
const numbers = [1, -1, 2, 3];

const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});
console.log(atLeastOnePositive);

//filter array
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

console.log(filtered);


//map array
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>');

const html = '<ul>' + items.join('') + '</ul>';


console.log(html);

//map array
const numbers = [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value)


console.log(items);


//reducing an array
const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers) {
//   sum += n;
// }
// console.log(sum);

//a =0, c=1 => a =1
//a =1, c=-1 => a =0
//a =0, c=2 => a =2
//a =2, c=3 => a =5
//loops through array with accumulator

//a = 1, c = -1 => a = 0
//a = 0, c = 2 => a = 2
//a = 2, c = 3 => a = 5
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum);S