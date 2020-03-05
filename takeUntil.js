const eqArrays = (arr1, arr2) => {
  let isEqual = true;
  if (arr1.length !== arr2.length) isEqual = false;
  arr1.forEach((element, index) => {
    if (element !== arr2[index]) isEqual = false;
  });
  return isEqual;
};

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2)
    ? console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
};

const takeUntil = (array, callback) => {
  let indexToStop = array.length -1;
    array.forEach((element,index) => {
      if(callback(element))
      indexToStop = index;
    });
  return [...array].slice(0,indexToStop);
};

//TEST
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log("---");

const data2 = [
  "I've",
  "been",
  "to", 
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood"
];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
