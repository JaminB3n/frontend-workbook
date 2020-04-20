import { factorial } from "./factorial";

describe("Functions", () => {
  describe("factorial", () => {
    it("Should log the accurate result", () => {
      expect(factorial(4)).toEqual(24);
      expect(factorial(7)).toHaveBeenCalledWith(5040);
    });
  });
});
