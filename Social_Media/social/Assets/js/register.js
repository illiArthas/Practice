// This whole document is a jQuery language, it is pretty much used for when the user clicks on the link in the 
// Registration/login form, it hides and shows each element

// ThiS targets the document until it is ready
$(document).ready(function() {

	// On click signup, hide login and show registration form
	// Below selects the id="first" and when clicked, perform the function
	$("#signup").click(function() {
		$("#first").slideUp("slow", function() {
			$("#second").slideDown("slow");
		});
	});


	// On click signup, hide registration and show login form
	$("#signin").click(function() {
		$("#second").slideUp("slow", function() {
			$("#first").slideDown("slow");
		});
	});	
});