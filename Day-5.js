// Day-5
// **String Manipulation:**

// 1. **Reverse a String:**
//    Write a program that takes a string as input and outputs the reverse of that string.
const a = prompt("Write any thing");
const b = a.split("").reverse().join("");
document.getElementById("demo").innerHTML = b;

// 2. **Count Vowels and Consonants:**
//    Create a program that takes a string as input and counts the number of vowels and consonants.
const c = a.match(/[aeiouAEIOU]/g)?.length || 0;
const d = a.match(/[a-zA-Z]/g)?.length - c || 0;
document.getElementById("demo1").innerHTML = c;
document.getElementById("demo2").innerHTML = d;

// 3. **Check Palindrome:**
//    Implement a program that checks if a given string is a palindrome (reads the same forwards and backwards).

// 4. **Capitalize Words:**
//    Write a program that takes a sentence as input and capitalizes the first letter of each word.
const e = a.toUpperCase();
document.getElementById("demo3").innerHTML = e;
// 5. **String Encryption:**
//    Create a program that encrypts a string by shifting the characters by a certain number of positions in the alphabet.

// **JSON Manipulation:**

// 1. **Parse JSON:**
//    Write a program that takes a JSON string as input and parses it into a JavaScript object. Then, access and display specific properties from the object.
const string = `{"Name": "Sudhir" , "Age" : 21, "Gender" : "Male"}`; //JSON string
const abject = JSON.parse(string); //JSON object
document.getElementById("demo").innerHTML = `
<strong>Object</strong> <hr>
  Name: ${abject.Name}<br>
  Age: ${abject.Age}<br>
  Gender: ${abject.Gender}<br>`;

// 2. **Stringify JSON:**
//    Create an object with various properties and values. Convert the object into a JSON string using the `JSON.stringify()` function.
const _abject = JSON.stringify(abject);
document.getElementById("demo1").innerHTML =_abject;

// 3. **Manipulate JSON Data:**
//    Use parsed JSON data to perform calculations or display specific information. For instance, create a program that calculates the total value of items in a shopping cart.

// **Math Functions:**

// 1. **Generate Random Numbers:**
function generateRandom(min , max){
    return Math.random() * (max - min) + min;
  }
  let e = generateRandom(55, 77);
  document.getElementById("demo").innerHTML = e;

// 2. **Round Numbers:**
//    Create a program that takes a floating-point number as input and rounds it to the nearest integer using `Math.round()`.
  let f = parseFloat(prompt("Write your Floatinng-Point Number"));
  const round = Math.round(f);
  console.log(round)

// 3. **Calculate Hypotenuse:**
//    Implement a program that calculates the hypotenuse of a right triangle given the lengths of the two other sides using the Pythagorean theorem and `Math.sqrt()`.
const a = parseInt(prompt("Enter the First side that you know"));
const b = parseInt(prompt("Enter the Second side that you know"));
const hypotenuse = Math.pow(a , 2) + Math.pow(b, 2);
h = Math.sqrt(hypotenuse);
document.getElementById("demo").innerHTML = `
First side = ${a}<br>
Second side = ${b}<br>
Hypotenuse = ${h.toFixed(2)}<br>`

// 4. **Calculate Area and Circumference:**
//    Write a program that calculates the area and circumference of a circle given its radius using `Math.PI` and relevant formulas.
const a = parseInt(prompt("Enter the Radius"))
const circumfernce = 2 * Math.PI * a;
const area = Math.PI * Math.pow(a, 2);
document.getElementById("demo").innerHTML = `
Radius = ${a}<br>
Circumfernce = ${circumfernce.toFixed(2)}<br>
Area = ${area.toFixed(2)}`

// 5. **Generate Random Password:**
//    Create a program that generates a random password consisting of letters, numbers, and special characters.
