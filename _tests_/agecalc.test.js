import Agecalc from './../src/agecalc.js';

describe('Agecalc', () => {
  let inputTest;
  beforeEach(() => {
    inputTest = new Agecalc(20);
  });

  test('should convert user age into mercury years', () => {
    expect(inputTest.mercuryAge()).toEqual(83);
  });

  test('should convert user age into venus years', () => {
    expect(inputTest.venusAge()).toEqual(32);
  });

});
