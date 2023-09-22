const repeatString = function(repeatString, repeatTimes) {
    if (repeatTimes < 0) {
        return 'ERROR';
    }
    let string = '';
    for (let i = 0; i < repeatTimes; i++) {
        string += repeatString;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
