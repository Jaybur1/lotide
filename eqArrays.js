const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};


//function that takes to arrays and returns true or false, based on a perfect match

const eqArrays = (arr1, arr2) => {
  let isEqual = true;
  if (arr1.length !== arr2.length) isEqual = false;
  arr1.forEach((element, index) => {
    if(Array.isArray(element) && Array.isArray(arr2[index])) {
      isEqual = eqArrays(element,arr2[index])
    } else {
      if (element !== arr2[index]) isEqual = false;
    }
    
  });
  return isEqual;
};




//TESTS

assertEqual(eqArrays(["1","2","3"],["1","2","3"]),true);
assertEqual(eqArrays(["1","2","3"],["1","2",3]),false);
assertEqual(eqArrays(["1","2","3"],["1","2","3"]),true);
assertEqual(eqArrays(["1","2","3"],["1","2",3]),false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false
assertEqual(eqArrays([[[[[[[[[1]]]]]]]]], [[[[[[[[[1]]]]]]]]]), true) // => false