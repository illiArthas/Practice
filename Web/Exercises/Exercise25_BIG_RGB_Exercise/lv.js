var arrayOfColors;	// is used as an array
var circles = document.querySelectorAll(".circles");
var rgbPicked = document.getElementById("rgbPicked");
var resetButton = document.querySelector("button");
var msg = document.querySelector("#message");
var h1 = document.querySelector("h1");


arrayOfColors = createArray();
arrayToColors();
var pickedColor = pickRandomColor();
rgbPicked.textContent = pickedColor;


for (var i = 0; i < circles.length; i++) {
	circles[i].addEventListener("click", function() {
		var thisColor = this.style.backgroundColor;

		if (thisColor === pickedColor) {
			msg.textContent = "Good Job!";
			tryMe(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			msg.classList.add("messageDisplay");
			msg.textContent = "That's incorrect. Try Again!";
			this.style.backgroundColor = "#232323";
		}
	});
}

resetButton.addEventListener("click", function() {
	reset();
});
// functions below

// function for clicking



/// used to add colors to the array
function addColors() {
	var temp = "rgb(" + generateRGB() + ", " + generateRGB() + ", " + generateRGB() + ")";
	return temp;
}

/// used to generate numbers from 0 to 255
function generateRGB() {
	var temp = Math.floor(Math.random() * 256 + 0);			 
	return temp;
}

/// creates an array with random numbers
function createArray() {
	var temp = [];

	for (var i = 1; i <= circles.length; i++) {
		temp.push(addColors());
	}
	return temp;
}

// assigns the colors into the circles
function arrayToColors() {
	for (var i = 0; i < circles.length; i++) {
		circles[i].style.backgroundColor = arrayOfColors[i];
	}
}

function pickRandomColor() {
	var num = Math.floor(Math.random() * 9);
	var picked = arrayOfColors[num];
	return picked;
}

function tryMe(colour) {
	for (var i = 0; i < circles.length; i++) {
		var temp = colour;
		circles[i].style.backgroundColor = temp;
	}
}

function reset() {
	arrayOfColors = createArray();
	arrayToColors();
	pickedColor = pickRandomColor();
	h1.style.backgroundColor = "white";
	resetButton.textContent = "Change Color";
	rgbPicked.textContent = pickedColor;
	rgbPicked.style.color = "black";
}

