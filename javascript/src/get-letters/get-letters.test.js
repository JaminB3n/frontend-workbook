import { getLetter } from "./getLetter";

describe("Conditionals", () => {
  describe("getLetters", () => {
    it("should return A", () => {
      expect(getLetter("apple")).toEqual("A");
    });
    it("should return B", () => {
      expect(getLetter("box")).toEqual("B");
    });
    it("should return C", () => {
      expect(getLetter("hulk")).toEqual("C");
    });
    it("should return D", () => {
      expect(getLetter("queen")).toEqual("D");
    });
  });
});
