const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    
    let word = string;
    for (let i = 0; i < num - 1; i++) {
        word = word + string;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
