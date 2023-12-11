//for ascending order
arr1 = [100, 8, 77, 6, 5, 42, 3, 20, 1];
function numberCompare(num1, num2) {
  return num1 - num2;
}
console.log(arr1.sort(numberCompare));
//for descending order
function numberCompare2(num1, num2) {
  return num2 - num1;
}
console.log(arr1.sort(numberCompare2));

//same for the sting length
arr2 = ["Steele", "Colt", "Data Structures", "Algorithms"];
function lengthCompare(str1, str2) {
  return str1.length - str2.length;
}   
console.log(arr2.sort(lengthCompare));
