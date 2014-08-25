var tabs = document.getElementsByClassName('tab'),
	pages = document.getElementsByClassName('page'),
	current = 0;

[].forEach.call(tabs, function(tab, index){
	tab.addEventListener("click", function(event){
		tabs[current].classList.remove("active_t");
		pages[current].classList.remove("active_p");
		tabs[index].classList.add("active_t");
		pages[index].classList.add("active_p");
		current = index;
	});
});
