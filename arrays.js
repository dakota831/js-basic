
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

