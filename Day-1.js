//Comparison Operators

//Write a program to compare two numbers and display whether they are equal, greater than or less than each other

let x=15;
let y=5;
const compareNumbers = (x,y) => {
  if (x == y){
    return "The numbers are equal.";
  } else if (x > y) {
    return x +" is greater than " + y ;
  } else {
    return x+ " is less than " + y;
  }
}
const result = compareNumbers(x ,y);
console.log(result);

//Compare two strings and determine if they are equal or not.

a = "max";
b = "max";
const compareStrings = (a,b) => {
  if (a === b) {
    return "equal";
  } else {
    return "unequal";
  }
}
const newResult = compareStrings(a,b);
console.log(newResult);

function tooCompareStrings1(a,b) {
  if (a === b){
    return "Its Equal";
  } else {
    return "Its Unequal";
  }
}
 why= tooCompareStrings1(a,b);
console.log(why);

//Use comparison operators to check if a number is divisible by another number.
const divisbilityCheck = (x, y) => {
return x % y == 0; 
}
who = divisbilityCheck(x, y);
console.log(who);

//Check if a given string has a specific substring using comparison operators.
d = "This is a maximum and minimum temperature";
e = "loo";
const checkSubs = (d, e) => d.indexOf(e) !== -1;// it will give output in boolean
deo = checkSubs(d, e);
console.log(deo);

//Logical Operators

//Combine two conditions using the AND (&&) operator and check if both conditions are true.
const compareNumbersand = (x,y) => {
  return (x == 15) && (y == 5);
}
const compareNumbersandw = (x,y) => {
  return (x== 10) || (y == 3);
}
ww = compareNumbersandw (x,y)
const thirdresult = compareNumbersand(x ,y);
console.log(thirdresult);
console.log(ww);
//Write a program that determines whether a number is even and positive using logical operators.
w = 4;
const evenPositive = num => {
  return (num > 0) && (num%2 === 0);
}
deer = evenPositive(w);
console.log(deer);

