const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => total * currentItem);
};

const power = function(num1, num2) {
  let total = 1;
	for (let i = 0; i < num2; i++) {
    total = total * num1;
  }
  return total;
};

const factorial = function(num) {
	let fact = 1;
  let total = 1;
  for (let i = 0; i < num; i++) {
    total = total * fact;
    fact++;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
