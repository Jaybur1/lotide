const eqArrays = (arr1, arr2) => {
  let isEqual = true;
  arr1.forEach((element, index) => {
    if (element !== arr2[index]) isEqual = false;
  });
  return isEqual;
};


const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) ? console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
};



//TEST

assertArraysEqual([1,2,3],["1",2,3]); //fails
assertArraysEqual([1,2,3],[1,2,3]);   // passes