const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = (array, callback) => {
  let indexToStop = array.length - 1;
  array.forEach((element, index) => {
    if (callback(element)) indexToStop = index;
  });
  return [...array].slice(0, indexToStop);
};

module.exports = takeUntil;
// //TEST
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood"
// ];
// const results2 = takeUntil(data2, x => x === ",");
// console.log(results2);
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
