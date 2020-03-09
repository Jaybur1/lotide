# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jaybur1/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: A function that takes in a sentence (as a string) and returning an object with the count of each and every letter.
* `countOnly(allItems, itemsTocount)`:allItems: an array of strings that we need to look through. itemsToCount: an object specifying what to count. returning an object with the specifyed counts.
* `eqArrays(arr1,arr2)`: Function that takes two arrays and returns true or false, based on a perfect match.
* `eqObjects(obj1,obj2)`: Returns true if both objects have identical keys with identical values.
* `findKey(obj, callback)`: A function that takes in an obj and a callback and returns the key, based on the callback.
* `findKeyByValue(obj,value)`: A function which takes in an object and a value,
scans the object and returns the first key which contains the given value.
If no key with that given value is found, then should return undefined.
* `flatten(arr)`:A function which takes in an array, scans the array for inner arrays,id it finds an array it will "un pack it" and will return an 1 dimensional array that will include the elements of the inner arrays as well.
* `head(arr)`:A function which takes in an array and returning the first element of it.
* `letterPositions(string)`: A function which takes in a sentence and returning an obj with indexes for every each letter.
* `map(arr,callback)`:A function which takes in an array and a callback and returning a new array based on the callback.
* `middle(arr)`: A function that takes in an array and returns the middle-most element(s)
for arrays with 1 or 2 elements it return empty array