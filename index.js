// Your code here
// Get a reference to the Dodger element
var dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  // Get the current left position of the Dodger
  var currentLeft = parseInt(dodger.style.left);

  // Calculate the new left position by subtracting a certain value (e.g., 10 pixels)
  var newLeft = currentLeft - 10;

  // Set the new left position for the Dodger
  dodger.style.left = newLeft + "px";
}

function moveDodgerRight() {
  // Get the current left position of the Dodger
  var currentLeft = parseInt(dodger.style.left);

  // Calculate the new left position by adding a certain value (e.g., 10 pixels)
  var newLeft = currentLeft + 10;

  // Set the new left position for the Dodger
  dodger.style.left = newLeft + "px";
}

