//1.1 Value Swap
let a = 'red';
let b = 'blue';

//swap the values of a and b
let temp = a; //saved a to temp
a = b; //assigned b to a
b = temp;  //assigned temp to b



console.log(a);
console.log(b);

//1.2 Which is greater function
//write a function that takes two numbers and returns the maximum of the two
let number = max(8,2);
console.log(number);

function max(a,b){
 return (a>b) ? a : b;
}


//always test functions with different possible values

//call the function max and pass in two numbers
// console.log(max(5, 10));
// console.log(max(10, 5));
// console.log(max(10, 10));

//is portrait function
console.log(isLandscape(300, 200));


function isLandscape(width, height) {
  return (width>height);
}
//1.3 Fizzbuzz exercise
//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by 3 and 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//Not a number => "Not a number"


const output = fizzBuzz('pizza');
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return NaN;
    }
    if (input % 3 === 0 && input % 5 === 0) {
        return "FizzBuzz";
    }
    if (input % 3 === 0) {
        return "Fizz";
    }
    if (input % 5 === 0) {
        return "Buzz";
    }
    return input;
}

//1.4 Demerit points
//Speed Limit = 70
//5 -> 1 point
//Math.floor(1.3)
//12 points -> suspended

checkSpeed(132);

function checkSpeed(speed){
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok');
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12)
   console.log('License suspended');
  else
   console.log('Points ' + points);

}

//1.4 Even and odd numbers

showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
      const message = i % 2 === 0 ? 'EVEN' : 'ODD';
      console.log(i, message);
    }
  }


//1.5 Count Truthy
const array = [1,2,3];

console.log(countTruthy(array));
//Falsy
//undefined
//null
//0
//NaN
//false
//''

function countTruthy(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      count++;
    }
  }
  return count;
console.log(count);
}

//1.6 function that passes and object and displays all the properties of the object

const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
   if (typeof obj[key] === 'string')
     console.log(key, obj[key]);
}

//1.7 function that takes an array of numbers and returns the sum of all the numbers
console.log(sum(10));

//Multiples of 3: 3, 6, 9
//Multiples of 5: 5, 10

function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum
}

// 1.8 calculate grade of a student
//first calculate average grade
//Average = 70
//1-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const marks = [100, 100, 50]

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let average = sum / marks.length;
    if (average < 60) {
        return 'F';
    } else if (average < 70) {
        return 'D';
    } else if (average < 80) {
        return 'C';
    } else if (average < 90) {
        return 'B';
    } else {
        return 'A';
    }
}

//1.9 Show Stars
showStars(15);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let stars = '';
    for (let star = 1; star <= row; star++) {
      stars += '*';
    }
    console.log(stars);
  }
}

//1.10 Prime Numbers Printer
//Prime (whose factors are only 1 and itself)
//Composite (whose factors are 1, itself and other numbers)

//Composite Example
//12 = 1, 2, 3, 4, 6, 12
//Can be divided evenly by its factors

//CPrime examples
//11 = 1, 11
//13 = 1, 13

//print all prime numbers up to a given number
showPrimes(13);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }

    if (isPrime) {
      console.log(number);
      }
    }
}




//function to print all prime numbers up to a given number, if the number is not prime, it will print the next prime number
function showPrimes(num) {
  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
//function to check if a number is prime
function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


//2.1
//create address object with 3 properties. Street , city and zip. 
//create function called showAddress that takes an address oject and displays all the properties in this object along with their values.

let address = {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
}
function showAddress(address) {
    for (let key in address) {
        console.log(key + ": " + address[key]);
    }
}
showAddress(address);

//2.2

let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

//initialize the address object using a factory function
let createAddress = function(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

//initialize the address object using a constructor function
let Address = function(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address = new Address('a', 'b', 'c');




//2.3
let address1 = new Address('a', 'b' , 'c');
let address2= new Address('a', 'b' , 'c');
let address3 = address1;

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

//Constructor function
function Address(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.state === address2.state;
}

function areSame(address1, address2) {
    return address1 === address2;



//2.4
//Create blog post object with these properties: title, body, author, views, comments(author, body), isLive(true/false)
//Use Object literal syntax
let post = {
    title: "My first post",
    body: "This is my first post",
    author: "John Doe",
    views: 0,
    Comments: [
        {
            author: "John",
            body: "This is my first comment"
        }
    ],
    isLive: true
};



//2.5

let post = new Post('a', 'b', 'c');

console.log(post);

//constructor function to draft a post
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

//2.6
//create an array of objects. each object is a price range object. Three objects in total.
let priceRanges = [
    {
        "min": 0,
        "max": 50,
        "label": "$"
        "tooltip": 'Inexpensive'
    },
    {
        "min": 50,
        "max": 100,
        "label": "$$"
        "tooltip": 'Moderate'
    },
    {
        "min": 100,
        "max": 200,
        "label": "$$$"
        "tooltip": 'Expensive'
    }
];

let restaurants = [
    {
        "name": "The Ivy",
        "price": 50,
        "cuisine": "American",
        "rating": 4.5,
    },
    {
        "name": "The Green",
        "price": 150,
        "cuisine": "American",
        "rating": 4.5,
    },
];

//3.1

const numbers = arrayFromRange(-10, 4);

console.log(numbers);

//takes min and max. 
function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++) {
        output.push(i);
    }
    return output;
}

//3.2
const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));

function includes(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            return true;
        }
    }
    return false;
}

//3.2
const numbers = [1, 2, 3, 4];

console.log(includes(numbers, -1));

function includes(array, searchElement) {
    for (let element of array) 
        if (element === searchElement) 
            return true;
    return false;
}

//3.3
const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element of array) 
        if (!excluded.includes(element)) 
            output.push(element);
return output;
}

//   return array.filter(element => !excluded.includes(element));
// }

console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output;
}

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position < 0 || position >= array.length) {
//     return array;
//   }

//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//     output.splice(position, 0, element);
//     return output;
// }


//3.5 
//count occurrences
const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);

console.log(count);

//using reduce method
function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement)
        console.log(accumulator, currentValue, searchElement);
        return accumulator + occurrence;
    }, 0);
}



// function countOccurrences(array, searchElement) {
//     let count = 0;
//     for (let element of array)
//         if (element === searchElement)
//             count++;
//     return count;
// }


//3.6 
//get max
//returns the largest number in the array
// if given an empty array, return undefined

const numbers = [1, 2, 3, 4];

const max = getMax([5, 4, 3, 2, 1]);

console.log(max);

//using reduce method
function getMax(array) {
    return array.reduce((a, b) => a > b ? a : b);
}

// function getMax(array) {
//     if (array.length === 0) {
//         return undefined;
//     }
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// }

//3.7
//Movies

const movies = [
    { title: 'a', year: 2018, rating: 4.5 }
    { title: 'b', year: 2018, rating: 4.7 }
    { title: 'c', year: 2018, rating: 3 }
    { title: 'd', year: 2017, rating: 4.5 }
]



//All the movies in 2018 with rating > 4
//Sort them by rating
//Descending order
//Pick their title
// 'a'
// 'b'

// function moviesAfter2018(movies) {
//     return movies.filter(function(movie) {
//         return movie.year >= 2018;
//     }).sort(function(a, b) {
//         return b.rating - a.rating;
//     }).map(function(movie) {
//         return movie.title;
//     });
// }

const titles = movies
    .filter(m => m.year >= 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);
console.log(titles);

//4.1

//function that takes varying number of arguments and returns their sum
//modify the sum function to be able to accept an array
//use Array.isarray() to check if the argument is an array
// sum([]1, 2, ,3, 4]) => 10

// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         Array.isArray(arguments[i]) ? total += arguments[i].reduce((a, b) => a + b) : total += arguments[i];
//     }
//     return total;
// }
// console.log(sum(1, 2, 3, 20));

console.log(sum([1, 2, 3, 4]));


function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0])) {
        items = [...items[0]];
    }
    
    return items.reduce((a, b) => a + b);
}


//create circle object using object literal syntax
//have a radius property we can read and write to
//have area property that is read only

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);


