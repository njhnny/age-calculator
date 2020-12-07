export default class Agecalc {
  constructor(spaceAges) {
    this.spaceAges = spaceAges;
    this.pastAge = [];
  }

  pastExpect() {

  }
  mercuryAge() {
    return Math.round(this.spaceAges / .24);
  }
  mercuryLeft() {
    let thisAge = Math.round(this.spaceAges / .24);
    let expectancy = Math.round(85 / .24);
    return expectancy - thisAge;
  }
  venusAge() {
    return Math.round(this.spaceAges / .62);
  }
  venusLeft() {
    let thisAge = Math.round(this.spaceAges / .62);
    let expectancy = Math.round(85 / .62);
    return expectancy - thisAge;
  }
  marsAge() {
    return Math.round(this.spaceAges / 1.88);
  }
  marsLeft() {
    let thisAge = Math.round(this.spaceAges / 1.88);
    let expectancy = Math.round(85 / 1.88);
    return expectancy - thisAge;
  }
  jupiterAge() {
    return Math.round(this.spaceAges / 11.86);
  }
  jupiterLeft() {
    let thisAge = Math.round(this.spaceAges / 11.86);
    let expectancy = Math.round(85 / 11.86);
    return expectancy - thisAge;
  }
  saturnAge() {
    return Math.round(this.spaceAges / 29.46);
  }
  saturnLeft() {
    let thisAge = Math.round(this.spaceAges / 29.46);
    let expectancy = Math.round(85 / 29.46);
    return expectancy - thisAge;
  }
}