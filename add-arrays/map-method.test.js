function addArrays(a1, a2) {
  if (a1.length !== a2.length) throw new Error();
  for (const i of a1) {
    for (const j of a2) {
      if (typeof i !== "string" && typeof i !== "number") throw new Error();
      if (typeof j !== "string" && typeof j !== "number") throw new Error();
    }
  }
  return a1.map((v, i) => v + a2[i]);
}
for (const solution of [addArrays]) {
  describe(`${solution.name}:should combine two given arrays of equal length in a new one, throw an error if its lengths are not equal`, () => {
    
    describe("Add array with two correct number arrays, passed ", () => {
      it("Should add up the Arrays ", () => {
        expect(solution([0, 1], [4, 5])).toEqual([4, 6]);
      });
    });

    describe("Add array with two correct number arrays, passed ", () => {
      it("Should add up the Arrays ", () => {
        expect(solution(["a", "b"], ["c", "d"])).toEqual(["ac", "bd"]);
      });
    });

    describe("Add array with two correct number arrays with different length, passed ", () => {
      it("should throw error if the arrays are not the same length", () => {
        expect(() => solution([1, 2, 3], [4, 5, 6, 7])).toThrowError();
      });
    });

    describe("Add array with two incorrect parameters, should through error ", () => {
      it("Should fail when i passed weird array ", () => {
        expect(() => solution([2, "weird"], [() => 2, 4])).toThrowError();
      });
    });
  });
}
