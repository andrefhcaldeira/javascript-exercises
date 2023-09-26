const reverseString = function(phrase) {
    let string = '';
    for (let i = phrase.length; i != -1; i--) {
        string += phrase.charAt(i);
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
