const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const head = arr => arr[0];


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello","Lighthouse","Labs"]), "Hello");
assertEqual(head([1]),1);
assertEqual(head([]), undefined);
