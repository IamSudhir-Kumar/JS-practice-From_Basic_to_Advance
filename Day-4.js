// Arrays (creating, accessing elements, array methods):

// 1. Create an array of your favorite fruits and display the third element in the console.
const fruits = ["mangoe" , "apple", "orange", "kiwi"]
console.log(fruits[2]);

// 2. Write a program to add an element to the end of an existing array using the push() method.
const oNe = fruits.push("Banana"); //using Push for adding element in last in an array
const tWo = fruits.unshift("Papaya"); // using unshift for adding element in first in an array

// 3. Implement a program that uses the pop() method to remove the last element from an array.
const thRee = fruits.pop();//using Pop for removing element in last in an array
const fOur = fruits.shift();//using Shift for removing element in first in an array
console.log(fruits);

// **Array Iteration (forEach, map, filter, reduce):**

// 1. Use the forEach() method to loop through an array and display each element in the console.
const arr = [77, 78, 59];
arr.forEach(function(element){
  console.log(element);
})

// 2. Create a program that uses the map() method to double each number in an array.
function double(num){
  return num*2;
}
console.log(arr.map(double));

// 3. Implement a program that uses the filter() method to find even numbers in an array.
function even(num){
  return num%2 === 0;
}
console.log(arr.filter(even));

// Objects (creating, accessing properties, object methods):

// 1. Create an object representing a person with properties like name, age, and gender.
const info = {
    name : "Jhon Doe",
    age : 24,
    gender : "male" ,
  }
  
  // 2. Write a program that accesses and displays the value of a property from the created object.
  // 3. Implement a program that defines an object method to display the person's information.
  function print1(property){
    console.log(info[property]);
  };
  function print2 (){
      print1("name");
      print1("age");
      print1("gender");
  }
  print2();

// **Object Constructors and Prototypes:**

// 1. Define a constructor function for creating a Car object with properties like make, model, and year.
/* // 2. Create instances of Car using the constructor function and display their details.*/

function Car (name, model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
}
const myCar = new Car( "Merc", "mgt", 2015);
document.getElementById("demo").innerHTML = 
  `Name : ${myCar.name}<br>
  MOdel : ${myCar.model}<br>
  Year: ${myCar.year}<br>`
    
// 3. Implement a program that adds a method to the Car prototype to calculate the age of the car.
Car.prototype.cal = function() {
  const currentYear = new Date().getFullYear();
  return currentYear - this.year;
}
alert(myCar.cal());
