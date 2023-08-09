//Switch Statement:
//Write a program that takes a day number (1 to 7) as input and displays the corresponding day of the week using a switch statement.
let day;
switch (new Date().getDay()){
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thrusday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

//if the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:
/*---Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High*/
function sequentialSizes(val) {
  let answer = "";
switch(val){
  case 1:
  case 2:
  case 3:
  return "Low";
  break;
  case 4:
  case 5:
  case 6:
  return "Mid";
  break;
  case 7:
  case 8:
  case 9:
  return "High";
  break;
}
  return answer;
}

sequentialSizes(1);

//Free code camp problem 73 (counting cards)

//Create a simple calculator program that takes two numbers and an operator (+, -, *, /) as input. Use a switch statement to perform the calculation based on the chosen operator.
let a = 5;
let b = 7;
function calculate (a , b ,operator){
  switch(operator){
  case "+":
    return a + b;
  case "-":
    return a - b;
  case "*":
    return a * b;
  case "/":{
    if (b !== 0)
    return a / b ;
  else 
  return "It is invalid"
  }
  default:
     return "Invalid operator"
  }
  }


/*Certainly! Both "Switch Statement" and "Loops" are fundamental concepts in JavaScript that can greatly enhance your programming skills. Below are some basic programs to help you master these topics:

**Switch Statement:**

1. Write a program that takes a day number (1 to 7) as input and displays the corresponding day of the week using a switch statement.

2. Create a simple calculator program that takes two numbers and an operator (+, -, *, /) as input. Use a switch statement to perform the calculation based on the chosen operator.

3. Implement a program that takes a month number (1 to 12) as input and displays the corresponding month name using a switch statement.

4. Write a program that takes a letter of the alphabet as input and determines whether it is a vowel or a consonant using a switch statement.

5. Create a grading program that takes a numerical score as input (0 to 100) and assigns a letter grade using a switch statement.

**Loops (for, while, do-while):**

1. Use a for loop to print numbers from 1 to 10.

2. Write a program using a while loop that prints the even numbers from 2 to 20.

3. Implement a program using a do-while loop that repeatedly asks the user to guess a secret number until they guess it correctly.

4. Use a for loop to calculate the sum of the first n natural numbers, where n is taken as input from the user.

5. Write a program that takes a string as input and uses a loop to count the number of vowels (a, e, i, o, u) in the string.

6. Create a program that generates a multiplication table for a given number (up to a certain limit) using a loop.

7. Use a loop to find the factorial of a given number (n!) where n is taken as input from the user.

8. Write a program that prints a pattern of stars using nested loops, such as a pyramid or a triangle.

9. Implement a program that takes an array of numbers and uses a loop to find the maximum and minimum values.

10. Create a program that uses a loop to reverse a given string.

Remember, practice is crucial to mastering these concepts. Experiment with different scenarios and create your own programs using switch statements and various types of loops. As you practice more, you will become more confident in using these constructs effectively in your JavaScript code. Happy coding! */
