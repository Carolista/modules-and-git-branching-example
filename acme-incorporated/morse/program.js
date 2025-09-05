const translate = require('./translate.js');
const input = require('readline-sync');

function runProgram() {
    console.log(
		"\nEnter text to translate to Morse Code, or enter 'QUIT' when you're done."
	);

    while (true) {
        let phrase = input.question('\nEnter text to translate into Morse code:\n');
        if (phrase.toUpperCase() === 'QUIT') {
            console.log('\nThanks for trying out the translator! Goodbye.\n');
            break;
        } else {
            console.log(translate.translateAll(phrase));
        }
    }
}

runProgram();
