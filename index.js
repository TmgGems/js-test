/*
var a = " ";
console.log(a);

let x = 1;
let y = 2;

if(x == 1){
    console.log("Yes it is 1  ");
}
        
if (x===1 && y ===2){
    console.log("&&operator tested.")
}

if ((x=1) || (y=3)){
    console.log("||Operator tested")
}

//confirm("Are you happy??");

console.log("Namaste");

const num = prompt("Input number: ");
console.log(num);


var x =1;

if(x == 1){
    console.log("x is 1. ");
}else{
    console.log("x is not 1");
}

//Ternary Operator
let result = x === 1 ?"x is 1":"x is not 1";

for (let i = 0; i< 5;i++){
    console.log(i);
}


//Learning Function

function add(a,b){
    console.log("The addition of two numbers is ",a + b);
}

add(4,5);



//ES6 Style (Arrow Function)
const add =(a,b) =>{
    console.log(a + b);
}



// Accepting Challenging questions

//Q1. Write a JavaScript program that prints 'Hello World'.

console.log("Hello World ");

//Q2. Write a JavaScript program to set the value of PI.

const pi = 3.14;
console.log(pi);



//Q3. Write a JavaScript program to compute the sum of the two given integers. If the      two   values are the same, then return triple their sum.



var num1 = window.prompt("Enter the first number:");
var num2 = window.prompt("Enter the second number:");

num1 = parseInt(num1);
num2 = parseInt(num2);


if (num1 == num2){
    console.log(3*(num1+num2));
}else{
    console.log(num1 + num2);
}


// Q 2 Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

var num = window.prompt("Enter a given number ");
if (num > 0){
    if(num % 3 == 0){
        console.log("The given number is multiple of 3");
    }
    else(num % 7 == 0)
    {
        console.log("The given number is multiple of 7");
    }
}



// Q 3 Write a JavaScript program to get the current date.


var status = new Date();

var year = status.getFullYear();
console.log(year);

var month = status.getMonth();
console.log(month);

var day = status.getDay();
console.log(day);

// Program to get Current Time
var hours = status.getHours();
console.log(hours);

var minutes = status.getMinutes();
console.log(minutes);

var seconds = status.getSeconds();
console.log(seconds);



// Q 4 Write a JavaScript program to calculate multiplication and division of two numbers.(use same function to achieve this)

function calcualtion(x,y){
    var response = window.prompt("Choose either * or / .");
    if (response == "*"){
        console.log(x*y);
    }else if(response=="/")
    {
        console.log(x/y);
    }else
    {
        console.log("Invalid input!");
    }
 }

 calcualtion(2,3);

 

 //Q 5 Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
//[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]



function tempconvert(unit, value) {
    if (unit == "Fahrenheit") {
        var c = (value - 32) / 9 * 5;
        console.log("The conversion of the given number from Fahrenheit to Celsius is", c);
    } else {
        var f = (value / 5) * 9 + 32;
        console.log("The conversion of the given number from Celsius to Fahrenheit is", f);
    }
}

var feedback = window.prompt("Choose either Fahrenheit or Celsius");
var number = window.prompt("Enter the number: ");
tempconvert(feedback, number);

*/