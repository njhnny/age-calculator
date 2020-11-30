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
    console.log(`Your time left on Mercury is ${mercuryRemain} Mercury years`);
    console.log(`Your time left on Venus is ${venusRemain} Venus years`);
    console.log(`Your time left on Mars is ${marsRemain} Mars years`);
    console.log(`Your time left on Mars is ${jupiterRemain} Mars years`);
    console.log(`Your time left on Mars is ${saturnRemain} Mars years`);
    let mercLiteral = `Your age on Venus is ${venusAge}`;
    console.log(mercLiteral);
    $("p").text(mercuryAge);
    $("p").append(", ", venusAge, ", ", marsAge, ", ", jupiterAge, ", ", saturnAge);
  });
});