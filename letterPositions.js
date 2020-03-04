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


const letterPositions = (sentence) => {
  const result = {};
  sentence.toLowerCase().split("").forEach((letter,index)=> {
    if (letter !== " ") {
      result[letter] ? result[letter].push(index) : result[letter] = [index];
    }
  });
  return result;
};

//TEST

const result = letterPositions("hello");
assertArraysEqual(result.h,[0]);
assertArraysEqual(result.l,[2,3]);

const result1 = letterPositions("lighthouse in the house");
assertArraysEqual(result1.h,[3, 5, 15, 18]);
assertArraysEqual(result1.e,[9, 16, 22]);
assertArraysEqual(result1.n,[12]);

