const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

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
    if (Array.isArray(obj1[key])) {
      eqArrays(obj1[key],obj2[key]) ? checkResult = true : checkResult = false;
    } else {
      obj1[key] === obj2[key] ? (checkResult = true) : (checkResult = false);
    }
  }
  return checkResult;
};

const eqObjects = (object1, object2) => {
  return compareCheck(object1, object2) && compareCheck(object2, object1);
};

//TESTS
//primitive case
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

eqObjects(ab, abc);
//non primitive case

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
