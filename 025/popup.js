// Using query selector to create a popup
let popupBtns = document.querySelectorAll("button.popup-btn");

if (popupBtns) 
{
	var popupWrapper = document.createElement("div");
	popupWrapper.className = "popup-wrapper";
	document.body.prepend(popupWrapper);
}

popupBtns.forEach(popupBtn => 
{
	popupBtn.addEventListener("click", e => 
	{
		let popup = popupBtn.nextElementSibling;
		popup.classList.add("show");
		popupWrapper.classList.add("show");

		let popupCloseFunc = e => 
		{
			popup.classList.remove("show");
			popupWrapper.classList.remove("show");
		}

		let popupCloses = document.querySelectorAll(".popup-close");
		popupCloses.forEach(popupClose => 
		{
			popupClose.addEventListener("click", popupCloseFunc);
		})
		popupWrapper.addEventListener("click", popupCloseFunc);
	})
})


// Additional information
let ad_button = document.querySelector(".ad-btn");

ad_button.addEventListener("click", e => {
	let ad_package = document.querySelector(".ad-pack");
	ad_package.classList.toggle("show");
	if (ad_package.classList.contains("show"))
	{
		ad_package.style.maxHeight = 10 + ad_package.scrollHeight + 'px';
	} else 
	{
		ad_package.style.maxHeight = null;
	}
	window.scrollIntoView({bottom: 0, behavior: "smooth"})
});