const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], ["1", 2, 3]); //fails
assertArraysEqual([1, 2, 3], [1, 2, 3]); // passes
