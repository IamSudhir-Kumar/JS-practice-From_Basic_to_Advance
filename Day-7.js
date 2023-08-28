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

// Problem 3: File Reading
// Imagine you're reading data from a file using JavaScript (this is typically done on the server-side, but for the sake of practice, assume it's in a browser environment). Write a function that simulates reading a file and throws an error if the file is not found. Use a try and catch block to catch and display the error message.
// Timing Events (setTimeout, setInterval)
// Date and Time Manipulation
