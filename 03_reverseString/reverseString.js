const reverseString = function(phrase) {
    let string = '';
    // for each character in phrase
    // string + character
    // print string
    for (let i = phrase.length; i != -1; i--) {
        string += phrase.charAt(i);
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
