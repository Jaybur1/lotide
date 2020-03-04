const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

//function taking in a sentence (as a string) and returning an object with the count of each and every letter.

const noSpaces = (str) => {
  return str.toLowerCase().split(" ").join("").split("");
};
const countLetters = (string) => {
  const output = {};
  noSpaces(string).forEach(letter => {
    output[letter] ? output[letter] += 1 : output[letter] = 1;
  });
  return output;
};



//TEST
const result = countLetters("lighthouse in the house");

assertEqual(result.h, 4);
assertEqual(result.j, undefined);
assertEqual(result.e, 3);