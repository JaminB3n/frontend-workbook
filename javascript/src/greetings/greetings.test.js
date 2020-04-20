import { greeting } from "./greetings";

describe("Data types", () => {
  describe("greetings", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(jest.fn);

    it("Should log the accurate result", () => {
        greeting("Joe");
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenCalledWith("Hello, World!");
      expect(spy).toHaveBeenCalledWith("Joe");
    });
  });
});
