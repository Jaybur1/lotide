const eqArrays = (arr1, arr2) => {
  let isEqual = true;
  if (arr1.length !== arr2.length) isEqual = false;
  arr1.forEach((element, index) => {
    if (element !== arr2[index]) isEqual = false;
  });
  return isEqual;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const compareCheck = (obj1, obj2) => {
  let checkResult = false;
  for (const key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      eqArrays(obj1[key], obj2[key])
        ? (checkResult = true)
        : (checkResult = false);
    } else {
      obj1[key] === obj2[key] ? (checkResult = true) : (checkResult = false);
    }
  }
  return checkResult;
};

const eqObjects = (object1, object2) => {
  return compareCheck(object1, object2) && compareCheck(object2, object1);
};

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

//TEST
const test0 = { a: 123, b: [1, 3, 4] };
const test1 = { a: 123, b: [1, 3, 4] };
const test2 = { a: 145, b: [1, 8, 7] };
const test3 = { v: "polka", g: "dancer" };
assertObjectsEqual(test1, test2); // => should fail
assertObjectsEqual(test1, test0); // => should pass
assertObjectsEqual(test1, test3); // => should fail
assertObjectsEqual(test3, test2); // => should fail
