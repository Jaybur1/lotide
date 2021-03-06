const assertEqual = require("./assertEqual");

//function which takes in an object and a value
//scans the object and returns the first key which contains the given value
//if no key with that given value is found, then should return undefined.

const findKeyByValue = (object, valueToLook) => {
  let output;
  const valuesArr = Object.values(object);
  const keysArr = Object.keys(object);

  if (valuesArr.includes(valueToLook)) {
    output = keysArr[valuesArr.indexOf(valueToLook)];
  }

  return output;
};

module.exports = findKeyByValue;

//TEST
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire",
//   polka: "The Expanse"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
