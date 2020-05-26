import { performOperation } from "./perform-operation";

describe("Data types", () => {
  describe("perform-operation", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(jest.fn);

    it("Should log the accurate result", () => {
      performOperation("1", "5.0", "It works like a charm");
      expect(spy).toHaveBeenCalledTimes(3);
      expect(spy).toHaveBeenCalledWith(5);
      expect(spy).toHaveBeenCalledWith(9.0);
      expect(spy).toHaveBeenCalledWith("Yippie, It works like a charm");
    });
  });
});
