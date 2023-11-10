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
  reset(); 
  colourToGuess.textContent = pickedColor;
}

resetButton.addEventListener("click", function() {
  reset();
});

function clickCircle() {
  var circleGuess = this.style.backgroundColor.replaceAll(' ', ''); 
  if (circleGuess === pickedColor) {
    resultMessage.textContent = "You Win!";
    resetButton.textContent = "Play again";
    circles.forEach(function(circle) { 
      circle.style.backgroundColor = pickedColor;
    });
    banner.style.backgroundColor = pickedColor; 
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
    circle.addEventListener("click", clickCircle); 
  });
  banner.style.backgroundColor = defaultColour; 
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
  var randomIndex = Math.floor(Math.random() * colours.length); 
  return colours[randomIndex];
}


circles.forEach(function(circle) { 
  circle.addEventListener("click", clickCircle);
});
