var playing = true;

var myArray = [];


while (playing) {

	var todo = prompt("What would you like to do?\nType 'new' - Add a todo\n 'list' - View all todos\n 'quit' - Quit App\n 'delete' - specify index to delete");
	if (todo === "new") {
		newMe();		// calls function newMe()
	} else if (todo === "list") {
		listMe();		// calls function listMe()
	} else if (todo === "quit") {
		console.log("Thanks for using the program :)");
		playing = !playing;
	} else if (todo === "delete") {
		deleteMe();		// calls function deleteMe()
}





function newMe() {
	var ans = prompt("Enter a new todo");
		myArray.push(ans);
		console.log("Added " + ans);
}

function listMe() {
	console.log("**************");
		myArray.forEach(function(temp, i) {	// the second paremeter 'i' means the index position
			console.log(i + ": " + temp);
		});
		console.log("**************");
}

function deleteMe() {
	// ask for index to delete
		var asker = prompt("Enter a number to specify which index to delete");
		// to remove an index
		// use splice()
		myArray.splice(asker, 1);	// first param index to delete, sec is how many items to delete after first param. 
		console.log("Deleted index " + asker);
	}
}