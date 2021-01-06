let lists = document.querySelectorAll("li");

lists.forEach(list_item => {
	list_item.innerText += " updated";
	list_item.innerHTML += '<span class="badge badge-danger"> Version0</span>';
	list_item.textContent += " only this Friday";
	// content will return all of the texts inside a tag (even from subtags)
});


// Try a project
lists.forEach( item => {
	if (item.textContent.includes(" new"))
	{
		item.querySelector("span").style.display = 'inner-block';
	}
});