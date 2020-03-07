const assertEqual = require("./assertEqual");

const head = arr => arr[0];

module.exports = head;
//TEST
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([1]), 1);
// assertEqual(head([]), undefined);
