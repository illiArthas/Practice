
var movies = [{movie: "In Bruges", score: 5, seen: true}, {movie: "Frozen", score: 4.5, seen: false}, 
{movie: "Mad Max Fury Road", score: 5, seen: true}, {movie: "Les Miserables", score: 3.5, seen: false}];

/* 1. Using for loop
function boy() {
	for (var i = 0; i < movies.length; i++) {
		if (movies[i].seen === true) {
			console.log("You have watched \"" +  movies[i].movie + "\"" + " - " + movies[i].score + " stars");
		} else if (movies[i].seen === false) {
			console.log("You have not seen \"" +  movies[i].movie + "\"" + " - " + movies[i].score + " stars");
		}
	}
}	*/




//USING FOREACH TO DO THIS
/* 2. Using for each
movies.forEach(function(nigger){
	var result = "You have";

	if (nigger.seen) {
		result += " watched ";
	} else {
		result += " not seen ";
	}

	result += "\"" + nigger.movie + "\"" + " - ";
	result += nigger.score + " stars";
	//return result;
	console.log(result);
});
*/




/*
Cleanest way to do this

function buildString(nigger) {
	var result = "You have";

	if (nigger.seen) {
		result += " watched ";
	} else {
		result += " not seen ";
	}

	result += "\"" + nigger.movie + "\"" + " - "; 
	result += nigger.score + " stars";
	return result;
}

movies.forEach(function(nigger){
	console.log(buildString(nigger));
});

*/
