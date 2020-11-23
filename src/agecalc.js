export default class ageCalc {
  constructor(spaceAges) {
    this.spaceAges = spaceAges;
  }

  mercuryAge() {
    return Math.round(this.spaceAges / .24);
  }
  venusAge() {
    return Math.round(this.spaceAges/ .62);
  }
}