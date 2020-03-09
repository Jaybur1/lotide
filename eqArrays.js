//function that takes to arrays and returns true or false, based on a perfect match

const eqArrays = (arr1, arr2) => {
  let isEqual = true;
  if (arr1.length !== arr2.length) isEqual = false;
  arr1.forEach((element, index) => {
    if (Array.isArray(element) && Array.isArray(arr2[index])) {
      isEqual = eqArrays(element, arr2[index]);
    } else {
      if (element !== arr2[index]) isEqual = false;
    }
  });
  return isEqual;
};

module.exports = eqArrays;
