// Factorial exercise

function factor(nums) {
	if (nums === 0) {
		return 1;
	}
	var counter = nums;

	for (var cun = counter - 1; cun > 0; cun--) {

		counter *= cun;

	}

	return counter;
}


console.log("Factorial of 5 is " + factor(5));
console.log("Factorial of 2 is " + factor(2));
console.log("Factorial of 10 is " + factor(10));
console.log("Factorial of 0 is " + factor(0));