const printACMEInfo = require('./contactInfo.js');
const input = require('readline-sync');
const common = require('./common.js');

printACMEInfo();

let longDecNum = 43.624571248419348;

// Use the rounding function in utils to print the rounded number to 3 decimal places
console.log(common.roundToDec(longDecNum, 3));

// Print a random integer between 0 and 100
console.log(common.getRandNum(100));

// Ask a user for a book title, then print it in title case using the third function from utils.js
let bookTitle = input.question("What is one of your favorite books? ");
console.log(`Your favorite book: ${common.getTitleCase(bookTitle)}`);
