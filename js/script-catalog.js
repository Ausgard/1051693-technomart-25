		var
			buyBtn = document.querySelectorAll(".one-click-buy");
			buyPopup = document.querySelector(".popup-cart");
			buyClose = document.querySelector(".close-popup-buy");
					
					[].forEach.call(buyBtn, function(item) {
    item.addEventListener('click', function(evt) {
    	evt.preventDefault();
      buyPopup.classList.add("show-popup");
    });});

		buyClose.addEventListener("click", function (evt) {
			evt.preventDefault();
			buyPopup.classList.remove("show-popup");
			});

		window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
		if (buyPopup.classList.contains("show-popup")) {
			evt.preventDefault();
			buyPopup.classList.remove("show-popup");
}}}); 