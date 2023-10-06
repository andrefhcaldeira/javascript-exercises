const sumAll = function(first, last) {
    let total = 0;
    if (first > 0 && last > 0 && Number.isInteger(last) === true && Number.isInteger(first) === true) {
        if (first < last) {
            for (let i = first; i < (last + 1); i++) {
                total = total + i;
            }
        } else {
            for (let i = last; i < (first + 1); i++) {
                total = total + i;
            }
        }
        return total;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
