const charSets = require('./charsets');

function createPassword(length = 10, charSetsConfig = ['latinLower', 'latinUpper', 'digits']) {
    const characters = charSetsConfig.reduce(
        (acc, charSet) => charSet in charSets ? acc + charSets[charSet] : acc,
        '');

    const chars = [];
    for (let i = 0; i < length; i++) {
        const randomInd = Math.floor(Math.random() * characters.length);
        chars.push(characters.charAt(randomInd));
    }

    return chars.join('');
}

module.exports = { createPassword };
