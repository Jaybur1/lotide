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


//function that takes in an array and returns the middle-most element(s)
//for arrays with 1 or 2 elements it return empty array

const middle = (array) => {
  let mostMiddle = [];
  if (array.length % 2 !== 0 && array.length > 2){
    mostMiddle.push(Math.ceil(array.length / 2));
  } else if(array.length % 2 === 0 && array.length > 2) {
    mostMiddle.push((array.length / 2), (array.length / 2) + 1)
  }
  return mostMiddle;
};

//TEST 

assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1]),[]);