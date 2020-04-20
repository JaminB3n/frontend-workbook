import { getGrade } from "./getGrade";

describe("Conditionals", () => {
  describe("grades", () => {
    it("should return A", () => {
        expect(getGrade(26)).toEqual('A')
    });
    it("should return B", () => {
        expect(getGrade(24)).toEqual('B')
    });
    it("should return C", () => {
        expect(getGrade(16)).toEqual('C')
    });
    it("should return D", () => {
        expect(getGrade(12)).toEqual('D')
    });
    it("should return E", () => {
        expect(getGrade(7)).toEqual('E')

    });
    it("should return F", () => {
        expect(getGrade(2)).toEqual('F')
    });
  });
});
