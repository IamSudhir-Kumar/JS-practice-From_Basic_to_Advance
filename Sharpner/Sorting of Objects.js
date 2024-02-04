// Task details:-
// Given an Array of Objects(Name,Salary). Return An Array containing Objects sorted in Ascending Order of Salary using any of the sorting mechanism.

// Objects is of Class Employee

// It contains two attributes -> Name, Salary



// Return the Array containing Objects sorted in Ascending Order of Salary using any of the sorting mechanism.

 



// Example:-

// Input Array Contains Object Having Name and Salary.

// Babu_Rao 150

// Raju 160

// Shyam 140

// Pappu 200



// Output :-

// Shyam 140

// Babu_Rao 150

// Raju 160

// Pappu 200

///Solution

'use strict';
process.stdin.setEncoding('utf-8');
class Employee
{
    constructor(name,salary)
    {
        this.name=name;
        this.salary =salary;
    }
}
//Dont change the above code.
/**
 * @param {Employee[]} arr
 * @param {number} length
 * @return {Employee[]}
 */
function sort_array(arr,length){
/*Function to sort the array in ascending order
After sorting return the sorted array */
    arr.sort((a,b)=>a.salary-b.salary);
    return arr; ////Soltion of this question in O(nlogn) time complexity
}

//Dont change anything below. If changed click on reset.
async function readInput() {
        let inputString = '';
        var output=[];
        var input=[];
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            var length=parseInt(inputArr[0]);
            for(var i =0;i<2*length;i=i+2)
            {
                input.push(new Employee(inputArr[i+1], parseInt(inputArr[i+2])));
            }
            
            output = sort_array(input,length)
            for(var i=0;i<output.length;i++)
            {
                console.log(output[i].name+" "+ output[i].salary);
            }   
            process.exit();
            
        })
        

}
readInput();