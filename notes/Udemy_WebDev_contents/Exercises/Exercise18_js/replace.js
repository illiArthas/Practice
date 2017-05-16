// This exercise replaces all "-" characters into "_"

function kebabToSnake(str) {
	if (typeof str != "string") {
		return "This is not a string";
	}

	var myString = str.replace(/-/g, "_");	

	return myString;
}

