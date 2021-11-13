
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