const sum = (num1, num2) => {
  return num1 + num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num2 / num1;
};

const square = (num1) => {
  return num1 * num1;
};

module.exports = {
  sum: sum,
  multiply: multiply,
  divide: divide,
  square: square,

};
