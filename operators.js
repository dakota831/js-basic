// Operators and variables create expressions
//Expressions are used to implement logic and algorithms
//Operators include Aritmetic, Logical, Relational, Comparison and Bitwise

let x = 10;
let y = 3;

//Arthmatic Operators
//x + y is an example of an expression
// console.log(x + y); //addition operator
// console.log(x - y); //subtraction operator
// console.log(x * y); //multiplication operator
// console.log(x / y); //division operator
// console.log(x % y); //remainder of division operator
// console.log(x ** y); //exponent operator

//Incriment (++)
// console.log(x++); // prints 10 and then increments x by 1
// console.log(++x);// increments x by 1 and then prints 11

//Decriment (--)
// console.log(--x); // decrements x by 1 then prints 9
// console.log(x--); // prints 10 and then decrements x by 1

//same assignment operator
x = x + 5;
x += 5;

//multiply x by 3
x *= 3;
x= x * 3;


//comparison operators

// Relational operators
console.log(x>0)
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

//Equality operators
console.log(x === 1);
console.log(x !== 1);

//Lose equality (Converts Types/ Only Value)
console.log( 1 == 1 );
console.log( 1 == '1' );
console.log(true == 1);

// Strick equality (same type _and_ value)
// console.log( 1 === 1 );
// console.log( 1 === '1' );



// If a customer has more than 100 points, 
//they are a 'gold' customer. 
//Otherwise, they are a 'silver' customer.

let points = 90;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);


// Logical AND (&&)
// Returns true if both operands are true,
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


//Logical OR (||)
//Returns true if one of the operands is true.

let highIncome = false;
let goodCredit = false;
let elidgibility = highIncome || goodCredit;
console.log('Eligible', elidgibility);

// Not (!)
let applicationRefused = !elidgibility;

console.log('Application Refused', applicationRefused;

//boolean operates are not just true or false, the value of the operend is also returned

// Falsy (false)
// 0
// ''
// null
// undefined
// NaN


//Anything that is not falsy is truthy
//First truthy is returned
//Short circuiting


//Boolean that provides default values

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColop || defaultColop;

console.log(currentColor);
