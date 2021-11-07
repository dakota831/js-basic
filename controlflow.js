//For Statement

for (let i = 0; i < 5; i++) {
    console.log('Hello World', i);
  }

// if and else
//hour
// if hour is between 5am and 12pm, console.log("Good morning!");
// if hour is between 11pm and 6pm, console.log("Good afternoon!");
//otherwise, console.log("Good evening!");

let hour = 9;
if (hour >= 5 && hour < 12)
    console.log("Good morning!");
else if (hour >= 11 && hour < 18) 
    console.log("Good afternoon!");
else if (hour >= 17 && hour < 24)
    console.log("Good evening!");
else {
    console.log("Good night!");
}

//For loops include loop variable, start value, end value, and increment value
for (let i = 0; i <= 5; i++) {
  if(i % 2 !== 0) {
      console.log(i);
}
}

//While loops declare the variable outside the loop
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i); {
  i++;
}


//For loops include loop variable, start value, end value, and increment value
for (let i = 0; i <= 5; i++) {
    if(i % 2 !== 0) {
        console.log(i);
}
}

//While loops declare the variable outside the loop
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i); {
    i++;


}

//infinite loop ex

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
//while loop infinite
while (true) {
}
//do while loop infinite
let x = 0;
do {
//   x++;
} while (x < 5);
//for loop infinite
for (let i = 0; i > 0; i++) {
}
 //do while

//for-in'
const person = {
  name: 'John',
  age: 30
};
for (let key in person) {
  console.log(key, person[key]);
}

// Dot notation
person.name
person.age
//Bracket notation
person['name']
person['age']


const colors = ['red', 'green', 'blue'];
for (let index in colors) {
  console.log(index, colors[index]);
}

//for-of
for (let color of colors) {
  console.log(color);
}


//break and continue
let i = 0;
// while (i < 10) {
//   i++;
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }
while(i <= 10) {
  // if (i === 5) {
  //   break;
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

//with the break keyword we jump out of the loop
//with the continue keyword we jump to the next iteration of the loop