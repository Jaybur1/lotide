const assertArraysEqual = require("./assertArraysEqual");

//function that takes in an array and returns the middle-most element(s)
//for arrays with 1 or 2 elements it return empty array

const middle = array => {
  let mostMiddle = [];
  if (array.length % 2 !== 0 && array.length > 2) {
    mostMiddle.push(Math.ceil(array.length / 2));
  } else if (array.length % 2 === 0 && array.length > 2) {
    mostMiddle.push(array.length / 2, array.length / 2 + 1);
  }
  return mostMiddle;
};


module.exports = middle;
//TEST

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1]), []);
