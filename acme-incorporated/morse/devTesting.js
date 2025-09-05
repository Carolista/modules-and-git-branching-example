const translate = require('./translate.js');

let char = 'w';

let translatedChar = translate.translateChar(char);

console.log(`In Morse code, the letter '${char}' is: \n${translatedChar}\n`);

let word = 'specialty';

let translatedWord = translate.translateWord(word);

console.log(`In Morse code, the word '${word}' is: \n${translatedWord}\n`);

let phrase = "Dammit, Jim - I'm a doctor, not a coder!";

let translatedPhrase = translate.translateAll(phrase);

console.log(
	`In Morse code, the phrase '${phrase}' is: \n${translatedPhrase}\n`
);
