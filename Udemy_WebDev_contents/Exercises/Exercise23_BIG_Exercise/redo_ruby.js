alert("Connected!");

// Selectors
var cavsButton = document.querySelector("#cavs");
var gswButton = document.querySelector("#gsw");
var reset = document.querySelector("#reset");

var cavaliersScore = document.getElementById("cavsScore");
var warriorsScore = document.getElementById('gswScore');

var number = document.querySelector("input");
var limit = document.querySelector("#bestOf");

var winner = document.getElementsByTagName("h5");

var bestOf = 5;
var finished = false;
var cavScore = 0;
var gswScore = 0;


cavsButton.addEventListener("click", function() {
	if (finished != true) {
		cavScore++;
		cavaliersScore.textContent = cavScore;

		if (cavScore == bestOf) {
			finished = true;
		}
	}
});


gswButton.addEventListener("click", function() {
	if (finished != true) {
		gswScore++;
		warriorsScore.textContent = gswScore;

		if (gswScore == bestOf) {
			finished = true;
		}
	}
});



number.addEventListener("change", function () {
	resets();
	var newNum = this.value;
	limit.textContent = newNum;
	bestOf = newNum;
});


reset.addEventListener("click", resets);


function resets() {
	finished = false;
	cavScore = 0;
	gswScore = 0;

	cavaliersScore.textContent = cavScore;
	warriorsScore.textContent = gswScore;
};


if (finished != true) {
	var a = ((cavScore > gswScore) ? "Cavaliers Won series" : "Warriors Won Series");
	winner.textContent = "Coolies";
	winner.classList.add("you");
} else if (finished == false) {

}