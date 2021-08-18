// initialize npm
//chalk
const chalk = require('chalk');
console.log(chalk.blue.bold("Akanksha Raghav"));
console.log(chalk.blue.inverse("Akanksha Raghav"));
console.log(chalk.green.inverse("Success"));
console.log(chalk.red.inverse("Failure"));

// validator
const validator = require("validator");
const res = validator.isEmail('akanksha@raghav.com'); //=> true
console.log(res ? chalk.green.inverse(res): chalk.yellow.inverse(res));
// by default it is of yellow color