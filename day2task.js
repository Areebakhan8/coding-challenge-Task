//======= Day2 Task =======
import chalk from "chalk";
//task-1
//Write a Typescript program that print name, age and any true value statement in strong typing
console.log(chalk.bgMagenta.bold("\nTask-1\n"));
let myName = "Areeba Khan";
let myAge = 24;
let isStudent = true;
console.log(chalk.yellow.bold(` My Name is ${myName}\n My age is ${myAge}\n I am student of GIAIC ${isStudent}`));
//task-2
//Make a Simple object and print the result json stringify
console.log(chalk.bgMagenta.bold("\nTask-2\n"));
let teacher = {
    name: "Miss Ariba",
    age: 27,
    isDeveloper: true
};
console.log(chalk.yellow.bold(JSON.stringify(teacher)));
//task-3
// Write a Typescript program and print Hello, Summers! to the console in uppercase letters
console.log(chalk.bgMagenta.bold("\nTask-3\n"));
let message1 = "Hello, ";
let message2 = "Summers!";
let newMessage = message1 + message2;
console.log(chalk.yellow.bold(newMessage.toUpperCase()));
//task-4
// Make a variables in type inference and print the result in template literals
console.log(chalk.bgMagenta.bold("\nTask-4\n"));
let student1 = "Areeba";
let student2 = "Ifra";
console.log(chalk.yellow.bold(`My name is ${student1} & my new friend name is ${student2}`));
//task-5
//Write a Typescript program that calculates the sum of two numbers by using arithmetic operators (any two)
console.log(chalk.bgMagenta.bold("\nTask-5\n"));
let number1 = 20;
let number2 = 65;
let addNumber = number1 + number2; //add number
console.log(addNumber);
console.log(number1 * number2); //multipication
console.log(addNumber - 20); //subtraction
console.log(20 % 5); //modulus
console.log(20 / 5); //divide
