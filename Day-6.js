//  spread operator

// 1. **Merge Arrays:**
//    Given two arrays, merge them using the spread operator and create a new array containing all elements.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
const c = [...arr1, ...arr2]
document.getElementById("demo").innerHTML = c;
// 2. **Copy and Modify Object:**
//    Given an object with properties, create a shallow copy of the object using the spread operator. Then, modify a property in the copied object.
const d={
    "Name": "Sudhir",
    "age": 21,
  }
 const e = {...d};
 e.age=20;
 document.getElementById("demo1").innerHTML = `
 Name: ${e.Name}<br>
 Age: ${e.age}`

// 3. **Pass Arguments:**
//    Create a function that takes three arguments and returns the sum of those numbers. Use the spread operator to pass an array of numbers to the function.
const x = parseInt(prompt("Write a first number"));
const y = parseInt(prompt("Write a second number"));
const z = parseInt(prompt("Write a three number"));

function sum(...numbers){
  return numbers.reduce((total,num) => total + num, 0);
}
d = sum(x, y, z);
document.getElementById("demo").innerHTML = `
1st Number: ${x}<br>
2nd Number: ${y}<br>
3rd Number: ${z}<br>
Total Sum: ${d}`

// 4. **Clone Array and Append Element:**
//    Given an array, create a clone of the array and then append an element to the clone using the spread operator.
const a = [1, 2, 3];
const b = [...a];
console.log(Array.isArray(a)); //to check whether its a array or not
b.push(4);
console.log(b);
document.getElementById("demo").innerHTML = `
Original Array: ${a}<br>
Array after appending: ${b}`

// nested loop problems

// ### Basic Level:

// 1. **Print Patterns:**
//    Write a program to print various patterns using nested loops, such as squares, triangles, and diamond shapes.

// 2. **Multiplication Table:**
//    Print the multiplication table for numbers from 1 to 10 using nested loops.

// 3. **Print Pascal's Triangle:**
//    Write a program to print the first `n` rows of Pascal's Triangle using nested loops.

// ### Intermediate Level:

// 4. **Print Prime Numbers:**
//    Write a program to print all prime numbers between 1 and 100 using nested loops.

// 5. **Sum of Matrix Elements:**
//    Given a matrix (2D array), find and print the sum of all elements using nested loops.

// 6. **Find Duplicate Elements:**
//    Given an array, find and print any duplicate elements using nested loops.

// ### Advanced Level:

// 7. **Matrix Multiplication:**
//    Implement matrix multiplication for two matrices using nested loops.

// 8. **Sudoku Solver:**
//    Write a program to solve a Sudoku puzzle using nested loops and backtracking.

// 9. **Prime Factorization:**
//    Given a number, find and print its prime factorization using nested loops.

// ### Expert Level:

// 10. **N-Queens Problem:**
//     Implement a solution to the N-Queens problem using nested loops and backtracking.

// 11. **Generate Permutations:**
//     Generate all permutations of a given set of elements using nested loops.

// 12. **Image Convolution:**
//     Implement a basic image convolution operation using nested loops for image processing.

// // These problems cover a range of difficulty levels and applications for nested loops. As you work on these problems, you'll gain a deeper understanding of how to structure and use nested loops effectively in various scenarios.