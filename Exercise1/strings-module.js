const firstLetter = (str) => {
  return str[0];
};

const reverseStr = (str) => {
  return str.split('').reverse().join('');
};

const split = (str) => {
  return str.split('');
};

module.exports = {
  firstLetter: firstLetter,
  reverseStr: reverseStr,
  split: split
  ,
};
