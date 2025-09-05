const morseMap = require('./key.js');

function translateChar(char) {
	return morseMap[char.toUpperCase()];
}

function translateWord(word) {
    let translatedWord = '';
    for (let char of word) {
        if (char.toUpperCase() in morseMap) {
            translatedWord += translateChar(char) + ' ';
        }
    }
    return translatedWord;
}

function translateAll(phrase) {
    let phraseArray = phrase.split(' ');
    let translatedPhraseArray = phraseArray.map(word => translateWord(word));
    return translatedPhraseArray.join("| ");
}

module.exports = {
	translateChar,
    translateWord,
    translateAll
};
