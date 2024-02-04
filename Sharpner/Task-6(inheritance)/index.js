// Create a class named 'Shape' with a method to printShape "This is shape". 
// Then create two other classes named 'Rectangle', 'Circle' inheriting the Shape 
// class, both having a method to print "This is rectangle" and "This is circle" 
// respectively. Create a child class 'Square' of 'rectangle' having a method to 
// printSquare "Square is a rectangle". Now call the method of 'Shape' and 'Rectangle' 
// class by the object of 'Square' class.

////Solution..////////
class Shape {
  printShape() {
    console.log("This is shape");
  }
}
class Circle extends Shape{
  print(){
    console.log("This is circle")
  }
}
class Rectangle extends Shape {
  print() {
    console.log("This is rectangle");
  }
}

class Square extends Rectangle {
  printSquare() {
    console.log("Square is rectangle");
  }
}
//Do Not change the Below  Code



var x = new Square();
x.printSquare();
x.printShape();
x.print();
var y = new Circle();
y.print();
y.printShape();
