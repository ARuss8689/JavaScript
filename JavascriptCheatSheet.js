1.) Variables
// JavaScript variables can be equivalent to any data type
// Variables are defined like so:
var dog = "King Charles Spaniel"; var dognumber = 10;
var dogsareawesome = true;

2.) Debugging
// Comments are a great way to stay organized and leave notes in your code as to exactly what you're trying to accomplish
// The Console is a built-in tool in your browser where you can run JavaScript code directly. It also allows you to see the output of JavaScript you write in your editor
console.log("Something");
// Alerts are "pop-ups". You can see the output in a popup window as soon as the alert() function gets called
alert("Hey Everyone!");
// Logging to HTML means to change the content of an HTML element with content of your choice, which could be script output
function change(){ document.getElementById('dog').innerHTML = "Dogs are Awesome";
} <div onclick="change()" id="dog">You know what?</div>
3.) Different Data Types
// String types are just words 
String - "Alex Russell"
// Number types are just numbers
Number - 5, 10, 2000
// Boolean types are either true or false
Boolean - true, false 
// Undefined types are undefined
Undefined - (no value)

4.) Arrays
// Arrays are used to hold a collection of data, of any data type.
// This is an array full of strings:
["Pug", "Chihuahua", "Pomeranian", "Portuguese Water Dog"]
// They can hold multiple data types:
[11, 15, 25, 48, 79, "elephant"]
// Arrays can also be stored in variables:
var class_names = ["Julie", "Sophie", "Rob", "John"];

5.) Testing
// Any test returns a boolean true or false
// To test if two strings are equal:
"stringone" === "string two"; > false
// Using three equals signs instead of two also checks the object type
// If you don't check type, these are both true:
•	(10-5) == 5;
•	(10-5) == "5"
// To test if two strings are NOT equal: 
"stringone" !== "string two"; true
// To test if one number is greater than another: 
5 > 10; false
// <, >, <=, >= are also valid comparison operators

6.) Logic
Logic is the control flow of your program
Think of logic as a river that branches off in a few different ways
It allows you to make the computer do the thinking for you

7.) Functions
// A function is a way to encapsulate code for later use
// It can take arguments, which are used as variables inside the function
// It usually returns a value, which can be used later on or displayed immediately

function horses(numberOne, numberTwo){
return numberOne + 10 + otherNumber;
}
console.log(someName(4, 14));
>28


Examples
1.)

function animals(dogs,cats){
	return dogs + cats;
}
alert(animals(4,2));


2.)

function math(numberone,numbertwo){
	return numberone + 45 + numbertwo + 7;
}
console.log(math(40,35))

3.)

function love(boy,girl){
	return boy + loves + girl;
}
alert(love(Joanie,Chachie));