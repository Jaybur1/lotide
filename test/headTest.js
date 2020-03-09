const assert = require("chai").assert;
const head = require("../head");



describe("#head", () => {
  it("should return 5 for input [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]),5);
  });

  it('should return Hello for input ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it('should return 1 for input [1]', () => {
    assert.strictEqual(head([1]), 1);
  });

  it('should return undefined for input []', () => {
    assert.isUndefined(head([]));
  });
});
