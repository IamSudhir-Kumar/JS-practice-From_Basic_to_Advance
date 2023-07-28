//Functions (basic functions with parameters):
//Write a function that takes two numbers as parameters and returns their sum.

//ParseInt is used to convert string into number (Parses a string and returns an integer)
const a = parseInt(prompt("write the first number:"));
const  b = parseInt(prompt("write the secomd number"));
 function sum(a , b){
   return a + b;
 }
const add = sum(a,b);
document.getElementById("new").innerHTML = add;
