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
