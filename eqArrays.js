const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};


//function that takes to arrays and returns true or false, based on a perfect match

const eqArrays = (arr1, arr2) => {
  let isEqual = true;
  if (arr1.length !== arr2.length) isEqual = false;
  arr1.forEach((element, index) => {
    if (element !== arr2[index]) isEqual = false;
  });
  return isEqual;
};




//TESTS

assertEqual(eqArrays(["1","2","3"],["1","2","3"]),true);
assertEqual(eqArrays(["1","2","3"],["1","2",3]),false);