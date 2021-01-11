// Creating a scroll button based on the place of scroll
let scroll = document.querySelector("button.scroll");
let scroll2 = document.querySelector("button.scroll_article");

window.addEventListener("scroll", e => {
	if (!scroll2.classList.contains("show"))
	{
		show_change(scroll, 300);
	} else 
	{
		scroll.classList.remove("show")
	}
});

scroll.addEventListener("click", e => {
	if (scroll.classList.contains("show")) 
	{
		window.scrollTo({top: 0, behavior: "smooth"})
	}
});

window.addEventListener("scroll", e => {
	show_change(scroll2, 1500);
});

scroll2.addEventListener("click", e => {
	if (scroll2.classList.contains("show")) 
	{
		document.querySelector("#articles").scrollIntoView({top: 0, behavior: "smooth"})
	}
});

function show_change(element, scroll_height)
{
	if (window.scrollY > scroll_height) 
	{
		element.classList.add("show")
	} else 
	{
		element.classList.remove("show")
	}
};