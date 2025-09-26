// Load the core 'fs' module.  - inbuilt method 
import fs from 'fs';

// Write text to a file (creates or overwrites notes.txt)
fs.writeFileSync('notes.txt', 'This file was created by Node.js')

// To add new content without overwritting
fs.appendFileSync('notes.txt', " hey second try");

// accessing internal files
import utils from './internalmodule.js'
console.log(utils);

// accessing thirtparty package 
import validator from 'validator';

// let's use the validator to check whether the output is valid email or not
console.log(validator.isEmail('puneet@example.com')); 

// to check valid url 
console.log(validator.isURL('https:/example.com'));

// accessing one more thirdparty library - chalk
import chalk from 'chalk';  //latest es6+

// let try to use the chalk library by giving specific color to Success & Failure message also we can make it bold 
let successMessage = chalk.green.bold('Success');
let failureMessage = chalk.red('You lost');
console.log(successMessage, failureMessage)