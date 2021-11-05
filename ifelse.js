// if and else
//hour
// if hour is between 6am and 12pm, console.log("Good morning!");
// if hour is between 12pm and 6pm, console.log("Good afternoon!");
//otherwise, console.log("Good evening!");

let hour = 10;
if (hour >= 6 && hour < 12)
    console.log("Good morning!");
else if (hour >= 12 && hour < 18) 
    console.log("Good afternoon!");
else if (hour >= 18 && hour < 24)
    console.log("Good evening!");
else {
    console.log("Good night!");
}