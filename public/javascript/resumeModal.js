var resumeButtons = document.querySelectorAll("a#resume-modal")
for (let i = 0; i < resumeButtons.length; i++) {
	resumeButtons[i].addEventListener("click", function (event) {
		modalFunctionality(event);
	});
}

function modalFunctionality(event) {
	event.preventDefault();
	var modal = document.querySelector(".modal");
	var html = document.querySelector("html");
	modal.classList.add("is-active");
	html.classList.add("is-clipped");

	modal.querySelector(".modal-background").addEventListener("click", function (e) {
		e.preventDefault();
		modal.classList.remove("is-active");
		html.classList.remove("is-clipped");
	});

	var cancelButtons = modal.querySelectorAll(".cancel");
	for (let i = 0; i < cancelButtons.length; i++) {
		cancelButtons[i].addEventListener("click", function (e) {
			e.preventDefault();
			modal.classList.remove("is-active");
			html.classList.remove("is-clipped");
		});
	}
}