import { getSecondLargest } from "./second-largest";

describe("Array", () => {
  describe("second-largest", () => {
    it(`should return accurate results`, () => {
      expect(getSecondLargest([1, 2, 6, 9, 4, 11])).toEqual(9);
    });
  });
});
