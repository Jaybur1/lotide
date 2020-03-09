const assert = require("chai").assert;
const middle = require("../middle");

//TEST

describe("#middle", () => {
  it("should return an array with 2 indexes when passed in an even amount of elements", () => {
    const arr = [1, 2, 3, 4];

    assert.strictEqual(middle(arr).length, 2);
    assert.strictEqual(middle(arr)[0], 2);
    assert.strictEqual(middle(arr)[1], 3);
  });

  it("should return an array with a single element when passed in a uneven amount of elements", () => {
    const arr = [1, 2, 3, 4, 5];

    assert.strictEqual(middle(arr).length, 1);
    assert.strictEqual(middle(arr)[0], 3);
    assert.isUndefined(middle(arr)[1]);
  });

  it("should return an empty array when pasd in an array with 2 or less elements", () => {
    const arr = [1,2];
    const arr2 = [1];

    assert.strictEqual(middle(arr).length, 0);
    assert.strictEqual(middle(arr2).length, 0);
  });
});
