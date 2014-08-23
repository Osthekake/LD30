var historyStack = [];
var PageHelper = {
	init : function(container, addressfield){
		PageHelper.container = container;
		PageHelper.addressfield = addressfield;
		for(var pageId in Pages){
			var page = Pages[pageId];
			page.element = document.createElement('div');
			for (var i = 0; i < page.content.length; i++) {
				page.element.appendChild(page.content[i].asHTML());
			};
		}
	},
	loadPage : function(pageid){
		historyStack.push(PageHelper.addressfield.value);
		PageHelper.addressfield.value = pageid;
		var page = Pages[pageid];
		document.getElementById("body").className = page.style;
		PageHelper.container.className = page.style;
		var current = PageHelper.container.childNodes[0];
		if(current){
			PageHelper.container.removeChild(current);
			PageHelper.container.appendChild(page.element);
		}else
			PageHelper.container.appendChild(page.element);
		
	},
	back : function(){
		var pageid = historyStack.pop();
		console.log("going back to " + pageid);
		if(pageid){
			PageHelper.addressfield.value = pageid;
			var page = Pages[pageid];
			document.getElementById("body").className = page.style;
			PageHelper.container.className = page.style;
			var current = PageHelper.container.childNodes[0];
			if(current){
				PageHelper.container.removeChild(current);
				PageHelper.container.appendChild(page.element);
			}else
				PageHelper.container.appendChild(page.element);
		}
	}
}