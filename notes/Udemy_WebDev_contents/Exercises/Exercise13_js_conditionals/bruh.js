var age = prompt("How old are you");

if(age < 0){
	alert("What the fuck not a negative");
} else if (age == 21) {
	alert("Happy 21st Birthday!!");

} else if (age % 2 !== 0) {		// if age is odd
	alert("Your age is odd!");

} else if (age % Math.sqrt(age) === 0) {	// if age is perfect square
	alert("perfect square");
}