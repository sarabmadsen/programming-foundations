// lesson task 1

console.log("lesson task 1");
console.log("This is script 1");

// lesson task 2

console.log("lesson task 2");

// question 1
var integer = 3;
var decimal = 3.3;

console.log(integer)
console.log(decimal)

// question 2
var weekdays = "Monday" + "-" + "Tuesday" + "-" + "Wednesday" + "-" + "Thursday" + "-" + "Friday" + "-" + "Saturday" + "-" + "Sunday";

console.log(weekdays)

// question 3
var number1 = 5;
var number2 = 5;

var result1 = number1 + number2;
console.log(result1)

var result2 = number1 - number2;
console.log(result2)

var result3 = number1 * number2;
console.log(result3)

var result4 = number1 / number2;
console.log(result4)

// question 4
var boolean1 = true;
var boolean2 = false;

console.log(boolean1)
console.log(boolean2)

// question 5
var frogstring = "The frogs are angry";

console.log(frogstring.length)

// question 6
var timeElapsed;
var totalPrice;

// question 7
var number1 = "53";
var number2 = "44.6";

var convertedNumber1 = parseInt(number1);
var convertedNumber2 = parseFloat(number2);

// question 8
var pet = "donkey";
var age = 89;
var discountApplied = true;
var timeLeft;

console.log(typeof "donkey");
console.log(typeof 89);
console.log(typeof true);
console.log(typeof timeLeft);

// question 9
// var headingText = "Updating heading";

// var heading = document.querySelector("h1");
// heading.innerHTML = headingText;

// question 10
// var body = document.querySelector("body");
// body.style.backgroundColor = "lightskyblue";

// lesson task 3

console.log("lesson task 3");


// question 1
var firstNumber = 34;
var secondNumber = 89;

if(firstNumber < secondNumber) {
    console.log("The first number is smaller than the second");
}

// question 2
var age = 11;
var minimumAge = "13";

if (age >= minimumAge) {
    console.log("old enough");
} else {
    console.log("not old enough");
}

//question 4

var studentAge = 5
if (studentAge >= 6) {
    console.log("Barneskole");
} else if (studentAge >= 14) {
    console.log("Ungdomsskole");
} else if (studentAge >= 17) {
    console.log("Videregående skole");
} else {
    console.log("Invalid age");
}

// question 5

var colour = "blue";

if (colour = "orange") {
    console.log("This colour is a bit rubbish");
}

// question 6

var invoicePaid = false;

if (invoicePaid === false) {
    console.log("Not paid");
} 

if (invoicePaid === true) {
    console.log("paid");
}