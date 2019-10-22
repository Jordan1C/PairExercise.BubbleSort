describe("Bubble Sort", function() {
  beforeAll(function() {
    spyOn(bubbleSort, "swapper").and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it("getting to the center of tootsiepop involves exactly three licks", function() {
    bubbleSort.getToCenter();
    expect(tootsiepop.lick.calls.count()).toEqual(3);
  });
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("handles array with only one element", function() {
    expect(bubbleSort([1])).toEqual([1]);
    expect(bubbleSort([2])).toEqual([2]);
    expect(bubbleSort([5])).toEqual([5]);
  });
  it("sorts an array with multiple elements", function() {
    expect(bubbleSort([3, 2])).toEqual([2, 3]);
    expect(bubbleSort([4, 5])).toEqual([4, 5]);
    expect(bubbleSort([16, 256, 4])).toEqual([4, 16, 256]);
    expect(bubbleSort([75, 84, 37, 25])).toEqual([25, 37, 75, 84]);
  });
});
