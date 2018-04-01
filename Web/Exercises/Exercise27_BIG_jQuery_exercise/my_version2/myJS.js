/*	Check specific todos by clicking	*/
$("ul").on("click", "li", function() {
	$(this).toggleClass("clicked");
});


$("ul").on("click", "span", function(e) {
	// stops parent elements from triggering
	e.stopPropagation();

	// This fades out the parent LI, and then removes it
	$(this).parent().fadeOut("slow", function() {
		$(this).remove();
	});
});

$("input[type=text]").keypress(function(e) {
	// If Enter is pressed
	if (e.keyCode == "13") {
		var text = $(this).val();
		$(this).val("");

		// Create the new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>&nbsp;" + text + "</>");
	}
});

$(".fa-cart-plus").on("click", function() {
	$("input[type=text]").fadeToggle(500);
});