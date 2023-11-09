/* Reverse a String: Write a function that takes a string as 
input and returns the string reversed. You can iterate through
the string in reverse order and build the reversed string character
by character.*/
function rev(inputStirng){
    return inputStirng.split("").reverse().join("");
}
console.log(rev("Hello World!"));

