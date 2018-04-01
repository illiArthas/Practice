// Part 2 - Check off Specific Todos By Clicking
// Instead of $("#container") it can be $("ul")
$("#container").on("click", "li", function() {
	$(this).toggleClass("strike");
});

// Part 3 - when span is clicked remove the parent element, which is the 'li'
// Instead of $("#container") it can be $("ul")
$("#container").on("click", "span", function() {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();	// this fadesOut and then removes the element, after fading out.
	});
	event.stopPropagation();
});

// Part 4 - when enter is pressed record the value of the input and add it to the li
$("input").keydown(function(e) {
	if (e.keyCode == "13") {
		var text = $(this).val();					// grabs the value
		$("ul").append("<li><span><i class='fa fa-times' aria-hidden='true'></i></span> " + text + "</li>");	// Adds the value by using the append function
		$(this).val("");
	}
});

// Part 5 - select the '+' icon, when it's clicked fade input in/out
$('.fa-plus').click(function() {
	$("input").fadeToggle();
});