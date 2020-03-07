const assertArraysEqual = require("./assertArraysEqual");

const flatten = array => {
  let newArr = [];
  array.forEach(element => {
    Array.isArray(element) ? newArr.push(...element) : newArr.push(element);
  });
  return newArr;
};

module.exports = flatten;
//TEST
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
