import Agecalc from './../src/agecalc.js';

describe('Agecalc', () => {
  let inputTest;

  inputTest = new Agecalc(20);


  test('should create an Agecalc object with the defined age', () => {
    expect(inputTest.spaceAges).toEqual(20);
  });

  test('should convert user age into mercury years', () => {
    expect(inputTest.mercuryAge()).toEqual(83);
  });

  test('should tell how many years the user has left on mercury', () => {
    expect(inputTest.mercuryLeft()).toEqual(271);
  });

  test('should convert user age into venus years', () => {
    expect(inputTest.venusAge()).toEqual(32);
  });

  test('should tell how many years the user has left on venus', () => {
    expect(inputTest.venusLeft()).toEqual(105);
  });

  test('should convert user age into mars years', () => {
    expect(inputTest.marsAge()).toEqual(11);
  });

  test('should tell how many years the user has left on mars', () => {
    expect(inputTest.marsLeft()).toEqual(34);
  });

  test('should convert user age into jupiter years', () => {
    expect(inputTest.jupiterAge()).toEqual(2);
  });

  test('should tell how many years the user has left on jupiter', () => {
    expect(inputTest.jupiterLeft()).toEqual(5);
  });

  test('should convert user age into saturn years', () => {
    expect(inputTest.saturnAge()).toEqual(1);
  });

  test('should tell how many years the user has left on saturn', () => {
    expect(inputTest.saturnLeft()).toEqual(2);
  });
});
