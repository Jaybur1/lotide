const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  eqObjects(actual, expected)
    ? console.log(
        `✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
      )
    : console.log(
        `❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
      );
};

module.exports = assertObjectsEqual;
//TEST
// const test0 = { a: 123, b: [1, 3, 4] };
// const test1 = { a: 123, b: [1, 3, 4] };
// const test2 = { a: 145, b: [1, 8, 7] };
// const test3 = { v: "polka", g: "dancer" };
// assertObjectsEqual(test1, test2); // => should fail
// assertObjectsEqual(test1, test0); // => should pass
// assertObjectsEqual(test1, test3); // => should fail
// assertObjectsEqual(test3, test2); // => should fail
