
/*
var truey = true;

while (truey) {
	var asker = prompt("Are we there yet?");

	if (asker === "yes" || asker === "yeah") {
		truey = false;
	} else {
		alert("On our way...");
	}
}

alert("Yay, we finally made it");	*/

var boy = true;

while (boy) {

	var asker = prompt("Are we there yet?");
	
	if (asker.indexOf("yes") >= 0 || asker.indexOf("yeah") >= 0) {
		boy = false;	// it's asking if asker contains the word "yes" in it
	} else if (asker.indexOf("yes") === -1) {
		alert("Still traveling huh...");
	}
}

alert("We are finally here");

/*
	The way indexOf("levi") works is it checks which index the string "levi" is at,
	it will return an index i.e. 0, 1, 2, 3, etc.

	BUT 

	if you use indexOf("notWorking") a string that's not in any index the program
	will return negative one  -1

*/