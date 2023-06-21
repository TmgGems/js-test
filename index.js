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



//Q 6 Write a JavaScript program to count the number of vowels in a given string.

var request =window.prompt("Enter the given string: ");
var range = request.length;
console.log(range);
var sum = 0;
var i ="";
 for ( i = 0;i<range;i++){
    if(request[i] == 'a'||request[i] =='e'||request[i] =='i'||request[i] =='o'||request[i] =='u'){
        sum += 1;
    }
 }
 console.log("The total vowels present in given is ",sum);

 

 // just random one

 function multiply(a){
    for(var i= 1;i<=10;i++){
        console.log( a * i);
    }
 }

 var feedback = window.prompt("Enter the number you want a multiply table. ");
 conv = parseInt(feedback);
 multiply(conv);

 



 var fruits = ['apple','banana','mango'];
 function fruitslIst( fruits,name){
    fruits.push(name);
    return fruits;
 }
 

 var fav = window.prompt("Enter the fruit you want to push in a array. ");
 console.log(fruitslIst(fruits,fav));
 

 // Shift function -> to remove the first element from an array and returns that removed element.

 var fruits =['apple','banana','mango'];
 console.log(fruits.shift());
 console.log(fruits);


 
 
 // just random practice using conditional and array

var fruitslist = ['apple','banana','mango','grapes'];
 function check(list,order){
    if (order in list){
        console.log("Okey you will be Served :) ");
    }else{
        console.log("Sorry Not Available ! ")
    }

 }

 var order = window.prompt("Enter your order . ");
 check(fruitslist,order);

 */



/*
function area(a,b){
    return a * b;
}

const area = area(a,b){
    return a * b;
}


const Person = {
    fname : "John",
    Name : () => {
        return Person.fname;
    }
}

const a = Person.Name();
console.log(a);



const Fruits ={
    fone : "Apple",
    ftwo : " Mango",
    get : () =>{
        
    }
}
 
const F = Fruits.fone;
*/

const Newo = [];
const fruits = ['Appple','Banana','Mango'];

console.log(fruits.length);
console.log(fruits.pop())

 Newo.push(fruits[0]);
 console.log(Newo);
