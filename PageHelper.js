var historyStack = [];
var PageHelper = {
	init : function(container, addressfield){
		PageHelper.container = container;
		PageHelper.addressfield = addressfield;
		addressfield.onkeydown = PageHelper.search;
		//for(var siteId in Sites){
		//	var site = Sites[siteId];
		//	site.element = document.createElement('div');
		//	site.anchors = {};
		//	for (var i = 0; i < site.content.length; i++) {
		//		var sitecontent = site.content[i];
		//		site.element.appendChild(sitecontent.asHTML(site));
		//	};
			//console.log(site);
		//}
		for(var pageId in Pages){
			var page = Pages[pageId];
			//console.log(page);
			//console.log(pageId)
			if(page.content){
				page.element = document.createElement('div');
				for (var i = 0; i < page.content.length; i++) {
					page.element.appendChild(page.content[i].asHTML());
				};
				//console.log(page);
			}else if(page.asHTML){
				var article = page.asHTML();
				page.element = article;
				page.style = article.ztyle;
				if(article.reload)
					page.reload = article.reload;

				//console.log(page);
				//console.log(page.element);
			}else{
				console.log("Warning: Page has no content or html: " + pageId)
			}
		}
	},
	search : function(event){
		if (event.keyCode == 13){
			var entered = PageHelper.addressfield.value;
			console.log(entered + " was entered by user");
			if(Pages[entered])
				PageHelper.loadPage(entered);
			else
				PageHelper.loadPage("404");
		}
	},
	loadPage : function(pageid){
		historyStack.push(PageHelper.addressfield.value);
		PageHelper.addressfield.value = pageid;
		var page = Pages[pageid];
		//console.log(page);
		document.getElementById("body").className = page.style;
		if(page.reload){
			console.log("reloaded " + pageid);
			page.element = page.asHTML();
		}
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