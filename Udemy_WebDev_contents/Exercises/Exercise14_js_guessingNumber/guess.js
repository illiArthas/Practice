var ask = prompt("Guess a number between 1 to 5");

var number = Math.floor(Math.random() * 5) + 1;

if (ask > number) {
	console.log("Number is too high");
	console.log("Number is " + number);
} else if (ask < number) {
	console.log("Number is too low");
	console.log("Number is " + number);
} else if (ask == number) {
	console.log("Wow! You guessed it right!!");
	console.log("Number is " + number);
} 