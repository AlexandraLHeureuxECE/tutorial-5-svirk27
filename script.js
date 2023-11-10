var numCircles = 6;
var colours = [];
var pickedColor;
let defaultColour = "#582c99";

var circles = document.querySelectorAll(".circle");
var colourToGuess = document.getElementById("colour-to-guess");
var resultMessage = document.getElementById("result-message");
var banner = document.querySelector("h1");
var resetButton = document.getElementById("restart");

init();

function init() {
  reset(); // Call reset here, not resetButton which is an element, not a function
  colourToGuess.textContent = pickedColor;
}

resetButton.addEventListener("click", function() {
  reset();
});

function clickCircle() {
  var circleGuess = this.style.backgroundColor.replaceAll(' ', ''); // Corrected method name to replaceAll
  if (circleGuess === pickedColor) {
    resultMessage.textContent = "You Win!";
    resetButton.textContent = "Play again";
    circles.forEach(function(circle) { // Corrected misspelling of 'function'
      circle.style.backgroundColor = pickedColor;
    });
    banner.style.backgroundColor = pickedColor; // Corrected camelCase for backgroundColor
  } else {
    this.style.backgroundColor = defaultColour;
    resultMessage.textContent = "Try again";
  }
}

function reset() {
  genRandomColours();
  pickedColor = chooseColor();
  colourToGuess.textContent = pickedColor;
  circles.forEach(function(circle, index) {
    circle.style.backgroundColor = colours[index];
    circle.addEventListener("click", clickCircle); // Corrected to use clickCircle
  });
  banner.style.backgroundColor = defaultColour; // Corrected camelCase for backgroundColor
  resetButton.textContent = "Restart";
  resultMessage.textContent = "";
}

function makeColour() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function genRandomColours() {
  colours = [];
  for (var i = 0; i < numCircles; i++) {
    colours.push(makeColour());
  }
}

function chooseColor() {
  var randomIndex = Math.floor(Math.random() * colours.length); // Corrected to Math.random
  return colours[randomIndex];
}

// This code seems to be intended to initialize the click listeners, but it's outside of a function
// Should be moved into init or reset function or just deleted if already initialized inside them
circles.forEach(function(circle) { // Corrected misspelling of 'function'
  circle.addEventListener("click", clickCircle);
});
