console.log("Module assignement 1");


// Question 1

var numberValue = 5;
var booleanValue = true;
var stringValue = "This is a string";

console.log(typeof numberValue);
console.log(typeof booleanValue);
console.log(typeof stringValue);


// Question 2

var firstName = "Sara";
var lastName = "Madsen";
var fullName = (firstName + " " + lastName);

console.log("Full Name: " + fullName);


// Question 3

var exampleWord = "frog";

console.log(typeof exampleWord);

var frogValue = (typeof exampleWord);

console.log("The type of frog is " + frogValue);


// Question 4

var orderHasShipped = true;

if (orderHasShipped === true) {
    console.log("The order shipped");
} else {
    console.log("The order did not ship");
}


// Question 5

for(var i = 7; i <= 13; i++) {
    console.log(i);
}