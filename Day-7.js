// Error Handling (try-catch blocks)
// Problem 1: Divide by Zero
// Write a program that takes two numbers as input and calculates their quotient. However, handle the case where the second number is zero by using a try and catch block to display an error message.

let a = parseInt(prompt("Enter the First Number:"));
let b = parseInt(prompt("Enter the Second Number:"));
try {
  if (b === 0) {
  throw new Error("Its not divisible by Zero");
  }
  
  const divide = a / b;
  console.log(divide);
} 
catch (error) {
  console.log("Error" , error.message);
}

// Problem 2: Invalid Input
// Create a function that prompts the user to enter their age. Use a try and catch block to handle scenarios where the user enters a non-numeric value. Display an error message in the catch block.

// Timing Events (setTimeout, setInterval)
// Date and Time Manipulation
