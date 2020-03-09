const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const isObj = obj => {
  return (
    typeof obj === "object" &&
    typeof obj !== "function" &&
    !Array.isArray(obj) &&
    obj !== null
  );
};

const checkLength = (obj1, obj2) => {
  const obj1Arr = Object.keys(obj1);
  const obj2Arr = Object.keys(obj2);
  return obj1Arr.length === obj2Arr.length;
};

const checkType = (obj1, obj2) => {
  return (
    (isObj(obj1) && isObj(obj2)) || (Array.isArray(obj1) && Array.isArray(obj2))
  );
};

const eqObjects = (object1, object2) => {
  let result = true;
  if (!checkLength(object1, object2)) result = false;
  if (!checkType(object1, object2)) result = false;

  for (const key in object1) {
    if (isObj(object1[key])) {
      checkType(object1[key], object2[key])
        ? (result = eqObjects(object1[key], object2[key]))
        : (result = false);
    } else if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      checkType(object1[key], object2[key])
        ? (result = eqArrays(object1[key], object2[key]))
        : (result = false);
    } else {
      if (object1[key] !== object2[key]) result = false;
    }
  }
  return result;
};

module.exports = eqObjects;

// //TESTS
// const abc = { a: "1", b: "2", c: "3" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true
// assertEqual(eqObjects(ab, abc), false); // => fal
// assertEqual(eqObjects(cd, { c: 1, d: 2 }), false); // =>fal
// assertEqual(eqObjects(cd, cd2), false); // => false
// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
// assertEqual(
//   eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
//   false
// ); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
