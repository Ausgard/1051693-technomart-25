var btn = document.querySelector("a.mail");
		form = document.querySelector(".write-us-form");
		close = document.querySelector(".close-popup");
		log = form.querySelector("[name=your-name]");
		mail = form.querySelector("[name=your-mail]"); 
		text = form.querySelector("[name=comment-field]");
		isStorageSupport = true;
		storage = ""; 

		try {
		storage = localStorage.getItem("log");}
		catch (err) {
		isStorageSupport = false;}
		btn.addEventListener("click", function (evt) {
			evt.preventDefault();
			form.classList.add("show-popup");
		if (storage) {
			log.value = storage;
			mail.focus();}
		else {
			log.focus();}
		if (storage) {
			mail.value = storage;
			text.focus();}
		else {
			mail.focus();
}});

		close.addEventListener("click", function (evt) {
			evt.preventDefault();
			form.classList.remove("show-popup");
			form.classList.remove("error-popup");
			});
		form.addEventListener("submit", function (evt) {
		if (!log.value || !mail.value || !text.value) {
			evt.preventDefault();
			form.classList.remove("error-popup");
			form.offsetWidth = form.offsetWidth;
			form.classList.add("error-popup");}
		else {
		if (isStorageSupport) {
				localStorage.setItem("log", log.value);
}}});

window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
		if (form.classList.contains("show-popup")) {
			evt.preventDefault();
			form.classList.remove("show-popup");
			form.classList.remove("error-popup");
}}}); 