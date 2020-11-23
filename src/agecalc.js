export default class ageCalc {
  constructor(spaceAges) {
    this.spaceAges = spaceAges;
  }

  mercuryAge() {
    return Math.round(this.spaceAges / .24);
  }
  venusAge() {
    return Math.round(this.spaceAges / .62);
  }
  marsAge() {
    return Math.round(this.spaceAges / 1.88);
  }
  jupiterAge() {
    return Math.round(this.spaceAges / 11.86);
  }
  saturnAge() {
    return Math.round(this.spaceAges / 29.46);
  }
}