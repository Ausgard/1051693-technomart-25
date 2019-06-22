var write_us = document.querySelector("a.mail");
		open = document.querySelector(".write-us-form");
		close = document.querySelector(".close-popup");
		log = open.querySelector("[name=your-name]");

		write_us.addEventListener("click", function(evt) {
			evt.preventDefault();
			open.classList.add("show-popup");
			log.focus();
		});
		close.addEventListener("click", function(evt) {
			evt.preventDefault();
			open.classList.remove("show-popup");
		})
		window.addEventListener("keydown", function(evt) {
			if (evt.keyCode === 27) {
				if (open.classList.contains("show-popup")) {
					evt.preventDefault();
					open.classList.remove("show-popup");

}}});