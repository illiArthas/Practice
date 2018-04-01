var nums = [45, 65, 77, 34];
var colors = ["red", "yellow", "blue"];

function myForEach(array, func) {	// parameters takes in an array, and a function 
	// loop through array
	for (var i = 0; i < array.length; i++) {
		// call func for each item in array
		func(array[i]);	
	}
}
// an example of calling this is
// myForEach(colors, alert);	// this alerts everytime it loops
// myForEach(color, console.log);	// this console logs everytime it loops


// Below examples are ways to use anonymous function
// myForEach(colors, function(){alert("HI")});	<-- this simply alerts "HI" everytime it loops
// myForEach(colors, function(element){console.log(element)});	<-- this is pretty much a foreach loop


// Using object 
/*
Array.prototype.myForEach = function(func) {
	for (var i = 0; i < this.length; i++) {
		func(this[i]);	// 'this' is reffering to 'array' parameter in myForEach() function
	}
}

var friends = ["Marian", "is", "my", "only", "friend"];

friends.myForEach(alert);	// this simply alerts every single element in the friends array
friends.myForEach(function(elem){
	console.log("I love " + elem);
});		// this simply console logs every element in the friends array with "I love " before it

*/