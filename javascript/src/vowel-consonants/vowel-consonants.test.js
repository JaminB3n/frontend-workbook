import { vowelsAndConsonants } from "./vowel-consonants";

describe("Loop", () => {
  describe("vowel-consonants", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(jest.fn);

    const testStr = "javascriptloops";
    const result = "aaioojvscrptlps";

    it(`should be called ${testStr.length} times`, () => {
      expect(spy).toBeHaveBeenCalledTimes(testStr.length);
    });

    it(`should be called with`, () => {
      result.split("").map((i) => {
        expect(spy).toHaveBeenCalledWith(1);
      });
    });
  });
});
