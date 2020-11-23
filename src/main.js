import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import ageCalc from './../src/agecalc.js';

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    let userInput = $("input#submission").val();
    let agesObject = new ageCalc(userInput);
    console.log(agesObject);
    let mercuryAge = agesObject.mercuryAge();
    let venusAge = agesObject.venusAge();
    let marsAge = agesObject.marsAge();
    let jupiterAge = agesObject.jupiterAge();
    let saturnAge = agesObject.saturnAge();
    console.log(mercuryAge);
    $("p").text(mercuryAge,);
    $("p").append(", ", venusAge, ", ", marsAge, ", ", jupiterAge, ", ", saturnAge);
  });
});