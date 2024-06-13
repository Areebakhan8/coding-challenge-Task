//     ============ Day4-Task ===========
// ========= Created By Akksa Saeed =========


import chalk from "chalk"
// task-1
/*: Create an Array. Add an element at the start of the Array and at the end of the Array
 by Suitable Array methods. First, print the Original Array and then the Modified Array*/

 let fruits:string[]=["Mango","Cherry","Banana","Apple","WaterMelon"]
 
//  add element at the start of array ====>
 fruits.unshift("Melon")

//  add element at the end of array =====>
fruits.push("PineApple")

console.log(fruits)

//Task-2
/*(b):  Create a Function named `sum` with two Parameters `num1 and num2` and return the sum of them.
 Store the returned value in a Variable by calling/invoking the function by passing Arguments.
 Now, print that Variable. */

//create function with perameter or return ===>

 function sum(num1:number,num2:number){
    return num1+num2
 }
// //  store returned value in variable with calling arguments ====>

let type=sum(29,55)
console.log(type)

//Task-3
/*Create an Object with two Properties. Access these properties with Dot Notation and Bracket Notation 
and store them in variables. Now, Print those Variables.*/


let obj={
    name:"Areeba Khan",
    age: 24
}

let objType=obj.name;
let typeObj=obj["age"];

console.log(chalk.yellow.bold(objType));
console.log(typeObj);


 let str = 'Kishor Kumar';
  console.log(str[0]);

