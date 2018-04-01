var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var rasata = document.querySelector("#rst");

var span1 = document.querySelector("#span1");
var span2 = document.querySelector("#span2");

var number = document.querySelector("input");
var limit = document.querySelector("#limit");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var mainScore = 5;


p1Button.addEventListener("click", nigga);
p2Button.addEventListener("click", nigga2);
rasata.addEventListener("click", resets);

number.addEventListener("change", function() {
	var newNum = this.value;	// number.value
	limit.textContent = newNum;
	resets();
	mainScore = parseInt(newNum);
}); 


function nigga () {
	if (gameOver != true) {
		p1Score++;
		span1.textContent = p1Score;

		if (p1Score === mainScore) {
			gameOver = true;
			span1.classList.add("cala");
		}
	}
}

function nigga2 () {
	if (gameOver != true) {
		p2Score++;
		span2.textContent = p2Score;

		if (p2Score === mainScore) {
			gameOver = true;
			span2.classList.add("cala");
		}
	}
}

function resets() {
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	span1.textContent = p1Score;
	span2.textContent = p2Score;
	span1.classList.remove("cala");
	span2.classList.remove("cala");
}