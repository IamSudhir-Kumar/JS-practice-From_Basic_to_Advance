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
