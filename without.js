const assertArraysEqual = require("./assertArraysEqual");

const without = (source, itemsToRemove) => {
  const newArray = [];
  source.forEach(elem => {
    if (!itemsToRemove.includes(elem)) newArray.push(elem);
  });
  return newArray;
};


module.exports = without;
//TEST
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without(["Apple", "Orange", "Wisky"], ["Apple"]), [
//   "Orange",
//   "Wisky"
// ]);

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
