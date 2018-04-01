/*	NOTE NOTE NOTE	
	
	$("ul").on("click", "li", ...);
	
	The reason wny the "li" is on the second argument
	is because it listens on the parent element, which is
	already existing, so it listens on the current and
	FUTURE li's 									*/


// Check Off Specific Todos By Clicking
$("ul").on("click", "li" , function() {
	$(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span" , function(e) {
	e.stopPropagation();		// This stops parent elements from trigerring

	$(this).parent().fadeOut("slow", function() {
		$(this).remove();				// removes the ul (parent)
		/*$(this).parent().remove();	 This is wrong, because it removes the entire li	*/
	});
});

//	Adds a new todo when an input is entered
$("input[type='text']").keypress(function(e) {
	// if the 'enter' key is pressed
	if (e.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();

		// This clears value the input to blank
		$(this).val("");

		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-times' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});


// Fades the input in/out
$(".fa-plus-circle").on("click", function() {
	// 500 = half a second
	// 1000 = 1 second
	$("input").fadeToggle(500);
});