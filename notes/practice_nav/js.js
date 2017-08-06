var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var b3 = document.querySelector("#b3");
var b4 = document.querySelector("#b4");
var b5 = document.querySelector("#b5");
var h1 = document.querySelector("h1");

var itemArray = [b1, b2, b3, b4, b5];
var counter = 0;
var clicked = 0;

window.onload = function() {
	itemArray[counter].focus();
}

window.addEventListener("keydown", function(e) {
	if (e.keyCode == "39") {
		if (counter >= itemArray.length - 1) {
			counter = 0;
			itemArray[counter].focus();
		} else if (counter === 0) {
			counter++;
			itemArray[counter].focus();
		} else {
			counter++;
			itemArray[counter].focus();
		}
		clicked++;
	} else if (e.keyCode == "37") {
		if (counter === 0) {
			counter = 4;
			itemArray[counter].focus();
		} else {
			counter--;
			itemArray[counter].focus();
		}
		clicked++;
	}
	h1.textContent = "You have pressed the keyboard " + clicked + " times";
});

