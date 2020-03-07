const assertEqual = require('./assertEqual');

const findKey = (object, callback) => {
  let output;
  const valuesArr = Object.values(object);
  const keysArr = Object.keys(object);
  const value = valuesArr.filter(callback)[0];

  if (valuesArr.includes(value)) {
    output = keysArr[valuesArr.indexOf(value)];
  }

  return output;
};

module.exports = findKey;
//TEST
// const testObj = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

// const result = findKey(testObj, x => x.stars === 2) // => "noma"

// assertEqual(result, "noma");