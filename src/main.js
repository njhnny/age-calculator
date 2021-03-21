import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Agecalc from './../src/agecalc.js';

$("form#form").submit(function(event) {
  event.preventDefault();
  $("p").text("");
  let userInput = $("input#submission").val();
  let agesObject = new Agecalc(userInput);
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
  $("p").append (`Your age on Mercury is ${mercuryAge}. Your time left on Mercury is ${mercuryRemain} Mercury years.<br>Your age on Venus is ${venusAge}. Your time left on Venus is ${venusRemain} Venus years.<br>Your age on Mars is ${marsAge}. Your time left on Mars is ${marsRemain} Mars years.<br>Your age on Jupiter is ${jupiterAge}. Your time left on Jupiter is ${jupiterRemain} Jupiter years.<br>Your age on Saturn is ${saturnAge}. Your time left on saturn is ${saturnRemain} Saturn years.<br>`);
  $("p").append(yearsLeft);
  alert(yearsLeft);
});