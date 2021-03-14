import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import Agecalc from './../src/agecalc.js';

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    let userInput = $("input#submission").val();
    let agesObject = new Agecalc(userInput);
    console.log(agesObject);
    let mercuryAge = agesObject.mercuryAge();
    let mercuryRemain = agesObject.mercuryLeft();
    let venusAge = agesObject.venusAge();
    let venusRemain = agesObject.venusLeft();
    let marsAge = agesObject.marsAge();
    let marsRemain = agesObject.marsLeft();
    let jupiterAge = agesObject.jupiterAge();
    let jupiterRemain = agesObject.jupiterLeft();
    let saturnAge = agesObject.saturnAge();
    let saturnRemain = agesObject.saturnLeft();
    let yearsLeft = agesObject.pastExpect();
    $("p").append (`Your time left on Mercury is ${mercuryRemain} Mercury years <br>Your time left on Venus is ${venusRemain} Venus years <br>Your time left on Mars is ${marsRemain} Mars years <br>Your time left on Jupiter is ${jupiterRemain} Jupiter years <br>Your time left on saturn is ${saturnRemain} Saturn years <br>`);
    $("p").append(mercuryAge);
    $("p").append(", ", venusAge, ", ", marsAge, ", ", jupiterAge, ", ", saturnAge);
    $("p").append(yearsLeft);
  });
});