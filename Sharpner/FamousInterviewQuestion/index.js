// Write a program to create a class count_objects and calculate the number of objects that has been created in realtime.
// Use the help of hints if there are any confusion
// Write Down the Entire Code for the above Question in your IDE and copy paste the code here.
// Since OOPS is a very important Topic this task will be checked Manually by the mentor during the mock interview ::).
// If there is any confusion make sure to ask the mentor and get it resolved .
class count_objects {
    static instanceCount = 0;

    constructor() {
        count_objects.instanceCount++;
    }

    static getCount() {
        return count_objects.instanceCount;
    }
}

// Do Not change the Below Code

var a = new count_objects();
var b = new count_objects();
var c = new count_objects();
console.log(count_objects.instanceCount); // Output: 3
var d = new count_objects();
console.log(count_objects.instanceCount); // Output: 4
var e = new count_objects();
console.log(count_objects.instanceCount); // Output: 5
