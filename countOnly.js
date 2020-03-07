const assertEqual = require("./assertEqual");
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = (allItems, itemsToCount) => {
  const output = {};
  allItems.forEach(elem => {
    if (itemsToCount[elem]) {
      output[elem] ? (output[elem] += 1) : (output[elem] = 1);
    }
  });
  return output;
};

module.exports = countOnly;
//TEST
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true
// });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
