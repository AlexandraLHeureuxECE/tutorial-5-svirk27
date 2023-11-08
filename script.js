// Number of circles we have in the game
var numCircles = 6;
// The colour variable should be an array that contains as many random RGB colours as there are circles.
var colours = [];
// This pickedColor is the RGB color we are trying to guess (string)
var pickedColor;
// This is the default color of the game.
let defaultColour = "#582c99";

// Grab all appropriate elements from the HTML.
var circles;
var colourToGuess;
var resultMessage;
var banner;
var resetButton;

init();

// The init function should reset the stage and set a new RGB color
function init() {
  // Call the reset function
  reset();

  // Set the text of the colourToGuess element to display the correct RGB color
  colourToGuess.textContent = pickedColor;
}

// Setup so that when the reset button is clicked, the reset function gets called
resetButton.addEventListener("click", reset);

// Define what should happen when any circle is clicked.
function clickCircle(event) {
  var clickedColor = event.target.style.backgroundColor;

  if (clickedColor === pickedColor) {
    // You win
    resultMessage.textContent = "You win!";
    resetButton.textContent = "Play again";
    changeColors(clickedColor);
  } else {
    // Try again
    event.target.style.backgroundColor = defaultColour;
    resultMessage.textContent = "Try again";
  }
}

// Attach the clickCircle function to all circles
for (var i = 0; i < numCircles; i++) {
  circles[i].addEventListener("click", clickCircle);
}

// The reset function should set new values for the colours array
function reset() {
  // Generate random colors and pick one as the target color
  colours = genRandomColours();
  pickedColor = chooseColor();

  // Display the colour RGB value on the main page
  colourToGuess.textContent = pickedColor;

  // Set the color of the circles to the random colors you generated
  for (var i = 0; i < numCircles; i++) {
    circles[i].style.backgroundColor = colours[i];
  }

  // Set the color of the banner to the default color
  banner.style.backgroundColor = defaultColour;

  // Set the text of the reset button to "Restart" and the result text to an empty String
  resetButton.textContent = "Restart";
  resultMessage.textContent = "";
}

// Write a function to make a random RGB color
function makeColour() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// Write a function that will set new values for the colours array
function genRandomColours() {
  var colors = [];
  for (var i = 0; i < numCircles; i++) {
    colors.push(makeColour());
  }
  return colors;
}

// Return one of the 6 RGB colours you created and stored in colours
// This function should set the colour you are guessing
function chooseColor() {
  var randomIndex = Math.floor(Math.random() * numCircles);
  return colours[randomIndex];
}

// Function to change the color of all circles and the banner to the given color
function changeColors(color) {
  for (var i = 0; i < numCircles; i++) {
    circles[i].style.backgroundColor = color;
  }
  banner.style.backgroundColor = color;
}