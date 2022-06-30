/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c61d06679fb30001ffe32f */

/* this exercise has 3 distractors */

function removeExclamationMarks(s) {
  if (typeof s !== "string") throw new Error("input is not a string");
  var newString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] != "!") {
      newString += s[i];
    }
  }
  return newString;
}

for (const solution of [removeExclamationMarks]) {
  describe(`${solution.name}:should remove exclamation marks from the input string`, () => {
    describe("should return input string without exclamation marks", () => {
      it("Hello! = Hello", () => {
        expect(solution("Hello!")).toEqual("Hello");
      });

      it("!!!input = input", () => {
        expect(solution("!!!input")).toEqual("input");
      });
    });

    describe("should return unchanged input if it does not contain any exclamation marks", () => {
      it("bye = bye", () => {
        expect(solution("bye")).toEqual("bye");
      });
    });

    describe("should throw an error if the type is not string", () => {
      it("1 = throw error", () => {
        expect(() =>solution(1)).toThrowError("input is not a string");
      });
    });
  });
}
