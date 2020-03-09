const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("should return an array with a length of 2, the first element should be Lighthouse and second = Labs", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);

    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], "Labs");
  });

  it("should not mutate the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it('should return undefined when passed in an array with one or less elements', () => {
    assert.isUndefined(tail([])[0], undefined);
    assert.isUndefined(tail([1])[0], undefined);
  });
});

