/* 1. reverse array
var myArray = [1,2,3,4];
var myArray2 = ["a","b","c"];

function printReverse(array) {
	array.reverse();
	console.log(array);
	// use this ABOVE example if you want the array to look like this [4,3,2,1]
	// use this BELOW example if you want the array to reverse and print in new line
	for (var i = array.length -1; i >= 0; i--) {
		console.log(array[i]);
	}

} */


/* 2. Checks if all elements in the array are the same
var one = [1,1,1,1];	// true
var two = [2,1,1,1];	// false
var three = ["a", "b", "p"];	// false
var four = ["a", "a", "a", "a"]; 	// true

function isUniform(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[0] != array[i]) {
			return false;
		}
	}
	return true;

	// SAME IDEA, BUT BELOW IS USING A FOREACH LOOP

	var first = array[0];
	array.forEach(function(element){
		if (element !== first) {
			return false;
		}
	});
	return true;
} */


/* 3. sumArray() that returns sum of all numbers in the array
var arrayOne = [1,2,3];	// 6
var arrayTwo = [10,3,10,4];	// 27
var arrayThree = [-5, 100];	// 95

function sumArray(array) {
	var counter = 0;

	for (var i = 0; i < array.length; i++) {
		counter += array[i];
	}

	return counter;

	// same idea but using a FOREACH

	var counter = 0;
	array.forEach(function(element) {
		counter += element;
	});
	return counter;
} */



/* 4. max() that accepts an array of numbers and returns the maximum nuber in the array
var arrayOne = [1,2,3];			// 3
var arrayTwo = [10, 3, 10, 4];	// 10
var arrayThree = [-5, 100];		// 100

function max(array) {
	if (typeof array === "number" || typeof array === "string" || typeof array === "undefined") {
		return 0;
	}

	var highest = array[0]; 

	for (var i = 1; i < array.length; i++) {
		if (highest < array[i]) {
			highest = array[i];
		}
	}

	return highest;
} */