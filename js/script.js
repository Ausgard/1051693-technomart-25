var btn = document.querySelector("a.mail");
		form = document.querySelector(".write-us-form");
		close = document.querySelector(".close-popup");
		log = document.querySelector("[name=your-name]");
		mail = document.querySelector("[name=your-mail]"); 
		text = document.querySelector("[name=comment-field]");
		mapBtn = document.querySelector("a.popup-img");
		mapPopup = document.querySelector(".popup-map");
		mapClose = document.querySelector(".close-popup-map"); 

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
}
});

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
				localStorage.setItem("mail", mail.value);
				localStorage.setItem("text", text.value);
}}});

window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
		if (form.classList.contains("show-popup")) {
			evt.preventDefault();
			form.classList.remove("show-popup");
			form.classList.remove("error-popup");
}}}); 

		mapBtn.addEventListener("click", function (evt) {
			evt.preventDefault();
			mapPopup.classList.add("show-popup");});
		mapClose.addEventListener("click", function (evt) {
			evt.preventDefault();
			mapPopup.classList.remove("show-popup");});
			window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("show-popup")) {
			evt.preventDefault();
			mapPopup.classList.remove("show-popup");
}}});