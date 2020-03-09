const assertEqual = require("../assertEqual");
const tail = require('../tail');


// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//Test Case 3: Check empty arrays and array with 1 element
assertEqual(tail([])[0], undefined);
assertEqual(tail([1])[0], undefined);
