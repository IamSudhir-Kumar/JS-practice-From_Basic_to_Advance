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

//Implement a function to check if a given number is even or odd and return the result by using input
function checkOddEven(){
  const num = parseInt(document.getElementById("input").value);
  const result = num % 2 === 0 ? "even" : "odd";
  document.getElementById("new").innerHTML = result;
}

/*Certainly! Below are some basic programs to help you master the topics related to functions, arrays, and objects in JavaScript:

**Functions (basic functions with parameters):**

1. Write a function that takes two numbers as parameters and returns their sum.
2. Create a function to calculate the area of a rectangle using its length and width as parameters.
3. Implement a function to check if a given number is even or odd and return the result.
4. Write a function that takes a string as a parameter and returns its length.
5. Create a function to check if a given string is a palindrome (reads the same forwards and backwards).

**Function Scope and Variable Hoisting:**

1. Write a program to demonstrate variable hoisting by trying to access a variable before its declaration.
2. Create a function that uses both global and local variables to showcase function scope.
3. Implement a program that modifies a global variable inside a function and observe the changes outside the function.

**Anonymous Functions and Function Expressions:**

1. Write an anonymous function and store it in a variable. Call the function and check its output.
2. Create a function expression inside another function and call it from the outer function.
3. Implement a program that uses an anonymous function to calculate the square of a given number.

 */
