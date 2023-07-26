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
