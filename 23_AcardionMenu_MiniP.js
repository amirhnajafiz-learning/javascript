// Creating an acardion menu with js
let accordion = document.querySelector(".accordion");

// Setting an event listener for wrapper spans
Array.from(accordion.children).forEach(wrapper => {
	wrapper.querySelector("span").addEventListener("click", e => {
		let span = e.target; // Clicked span
		let parent_el = span.parentElement;
		let div = span.nextElementSibling;
		parent_el.classList.toggle("show"); // Add show class to parent element
		if (wrapper.classList.contains("show"))
		{
			div.style.maxHeight = 30 + div.scrollHeight + 'px';
		} else 
		{
			div.style.maxHeight = null;
		}
		close_others(wrapper);
	});
});

// A function to close other wrappers
function close_others(wrapper)
{
	Array.from(accordion.children).forEach(w => {
		if (w != wrapper)
		{
			w.classList.remove("show");
			w.querySelector('div').style.maxHeight = null;
		}
	});
};


// Buttons 
let themes = ["gray", "green", "blue", "orange", "purpule"]
let buttons = document.querySelectorAll(".theme-btn");
Array.from(buttons).forEach(button => {
	button.addEventListener("click", e => {
		Array.from(accordion.children).forEach(wrapper => {
			let wrap_part = wrapper.querySelector("span");
			themes.forEach(theme => {
				if (wrap_part.classList.contains(`b_${theme}`))
				{
					wrap_part.classList.remove(`b_${theme}`);
				}
				if (theme == button.textContent.toLowerCase())
				{
					wrap_part.classList.add(`b_${theme}`)
				}
			})
		});
	});
});