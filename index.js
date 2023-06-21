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
*/

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

/*
function add(a,b){
    console.log("The addition of two numbers is ",a + b);
}

add(4,5);


*/
//ES6 Style (Arrow Function)
const add =(a,b) =>{
    console.log(a + b);
}  


