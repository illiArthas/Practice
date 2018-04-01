/*
var nigger = document.querySelector("button");


nigger.addEventListener("click", myFunction);

function myFunction() {
	
	var boi = document.querySelector("body");
	if (boi.style.background != "purple") {
		boi.style.background = "purple";
	} else {
		boi.style.background = "white";
	}	

		OR 	OR OR OR OR
		if (document.body.style.background != "purple") {
			document.body.style.background = "purple";
		} else {
			document.body.style.background = "white";
		}
	
}
*/


// BELOW IS ANOTHER WAY TO DO THE EXERCISE USING TOGGLE

var nigger = document.querySelector("button");

nigger.addEventListener("click", function() {
	document.body.classList.toggle("purple");
});

