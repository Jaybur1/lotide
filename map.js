const eqArrays = (arr1, arr2) => {
  let isEqual = true;
  if (arr1.length !== arr2.length) isEqual = false;
  arr1.forEach((element, index) => {
    if (element !== arr2[index]) isEqual = false;
  });
  return isEqual;
};


const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) ? console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
};

const map = (array,callback) => {
  const newArray = [];
  array.forEach(element => {
    newArray.push(callback(element))
  });
  return newArray;
};

const words = ["ground", "control", "to", "major", "tom"];


assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word.length ),[6,7,2,5,3]);
assertArraysEqual(map(words, word => word.length > 2 ),[true,true,false,true,true]);