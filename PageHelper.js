var PageHelper = {
	init : function(container){
		PageHelper.container = container;
	},
	loadPage : function(pageid){
		var page = Pages[pageid];
		PageHelper.container.className = page.style;
		PageHelper.container.innerHTML = "";
		for (var i = 0; i < page.content.length; i++) {
			PageHelper.container.appendChild(page.content[i].asHTML());
		};
	}
}