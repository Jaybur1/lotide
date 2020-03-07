const assertArraysEqual = require("./assertArraysEqual");

const map = (array, callback) => {
  const newArray = [];
  array.forEach(element => {
    newArray.push(callback(element));
  });
  return newArray;
};

module.exports = map;
//TEST
// const words = ["ground", "control", "to", "major", "tom"];

// assertArraysEqual(
//   map(words, word => word[0]),
//   ["g", "c", "t", "m", "t"]
// );
// assertArraysEqual(
//   map(words, word => word.length),
//   [6, 7, 2, 5, 3]
// );
// assertArraysEqual(
//   map(words, word => word.length > 2),
//   [true, true, false, true, true]
// );
