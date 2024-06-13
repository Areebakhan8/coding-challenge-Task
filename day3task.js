// =============== Day3 Task ===============
import chalk from "chalk";
// task-1
/*Create an string array of seven days and store it in a variable named 'Week',
Delete the day you born on, using splice method and replace that day with a new string  item 'My Day'.
Print the results.*/
console.log(chalk.bgMagenta.bold("\nDay3 Task-1\n"));
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
week.splice(1, 1, "My Day");
console.log(week);
//Task-2
// Make a function name 'Done' and print 'Yay! I have done my task Alina.' and Call it five times.
console.log(chalk.bgMagenta.bold("\nDay3 Task-2\n"));
function done() {
    console.log(chalk.yellow.bold('Yay! I have done my task Alina.'));
}
done();
done();
done();
done();
done();
