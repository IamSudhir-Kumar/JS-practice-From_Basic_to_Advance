// Create a class Employee Having 2 attributes (salary , working_hours).
// It will contain the following methods :-
// 1 - 'getInfo()' which takes the salary, number of hours of work per day of employee as parameter and initializes the attributes. (Note there is no constructor instead get_info method is used)

// 2 - 'AddSal()' which adds 10 to salary of the employee if it is less than 500. (note you don't have to print or return anything)

// 3 - 'AddWork()' which adds 5 to salary of employee if the working_hours is more than 6 hours. (note you don't have to print or return anything)

////solution.////////

class Employee {
  constructor() {}

  getInfo(salary, working_hours) {
    this.salary = salary;
    this.hours = working_hours;
  }

  addSal() {
    if (this.salary < 500) {
      this.salary += 10;
    }
  }

  addWork() {
    if (this.hours > 6) {
      this.salary += 5;
    }
  }
}

var t = new Employee();
t.getInfo(400, 7);
t.addSal();
t.addWork();
console.log(t.salary);
var x = new Employee();
x.getInfo(600, 8);
x.addSal();
x.addWork();
console.log(x.salary);
