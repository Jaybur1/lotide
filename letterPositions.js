const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = sentence => {
  const result = {};
  sentence
    .toLowerCase()
    .split("")
    .forEach((letter, index) => {
      if (letter !== " ") {
        result[letter]
          ? result[letter].push(index)
          : (result[letter] = [index]);
      }
    });
  return result;
};

module.exports = letterPositions;
//TEST

// const result = letterPositions("hello");
// assertArraysEqual(result.h, [0]);
// assertArraysEqual(result.l, [2, 3]);

// const result1 = letterPositions("lighthouse in the house");
// assertArraysEqual(result1.h, [3, 5, 15, 18]);
// assertArraysEqual(result1.e, [9, 16, 22]);
// assertArraysEqual(result1.n, [12]);
