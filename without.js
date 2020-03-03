const eqArrays = (arr1, arr2) => {
  let isEqual = true;
  if (arr1.length !== arr2.length) isEqual = false;
  arr1.forEach((element, index) => {
    if (element !== arr2[index]) isEqual = false;
  });
  return isEqual;
};


const assertArraysEqual = (arr1, arr2) => {
  console.log(arr1,arr2 );
  eqArrays(arr1, arr2) ? console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
};


const without = (source,itemsToRemove) => {
  const newArray = [];
  source.forEach(elem => {
    if(!itemsToRemove.includes(elem)) newArray.push(elem);
  })
  return newArray;
};

//TEST
assertArraysEqual(without([1,2,3],[1]),[2,3]);
assertArraysEqual(without(["1","2","3"],[1, 2, "3"]),["1","2"]);
assertArraysEqual(without(["Apple","Orange","Wisky"],["Apple"]),["Orange","Wisky"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
