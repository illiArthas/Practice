var li = document.querySelectorAll("li"); // first Li

// This is a way to use mouseover/mouseout to all of the Li's
for (var i = 0; i < li.length; i++) {
	li[i].addEventListener("mouseover", function() {
		//this.style.color = "green";			// another way of doing this
		this.classList.add("coloring");
	});

	li[i].addEventListener("mouseout", function() {
		//this.style.color = "black";			// another way of doing this
		this.classList.remove("coloring");
	});

	li[i].addEventListener("click", function() {
		this.classList.toggle("myClass");	// when clicked, puts a line-through on text
	});
}




/*  THIS IS A WAY TO USE MOUSEOUT/MOUSEOVER ON JUST ONE LI
firstLi.addEventListener("mouseover", function() {
	firstLi.style.color = "green";
});

firstLi.addEventListener("mouseout", function() {
	firstLi.style.color = "black";
}); */