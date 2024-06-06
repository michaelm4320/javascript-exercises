const reverseString = function(word) {
    let reverse = "";
    for (let i = word.length - 1; i > -1; i--) {
        reverse = reverse + word[i];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
