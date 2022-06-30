function addArrays(a1, a2) {
    if (a1.length !== a2.length) throw new Error();
    return a1.map((v, i) => v + a2[i]);
  }
  
  describe('Add array with two correct number arrays, passed ', () => {
    it('Should add up the Arrays ', ()  => {
  expect(addArrays([0,1]),([4,5])).toEqual([4,6])
    });
    });