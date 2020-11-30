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
    let venusAge = agesObject.venusAge();
    let marsAge = agesObject.marsAge();
    let jupiterAge = agesObject.jupiterAge();
    let saturnAge = agesObject.saturnAge();
    
    let mercLiteral = `Your age on Mercury is ${mercuryAge}`;
    console.log(mercLiteral);
    $("p").text(mercuryAge);
    $("p").append(", ", venusAge, ", ", marsAge, ", ", jupiterAge, ", ", saturnAge);
  });
});