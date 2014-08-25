var MailBox = {
	element : undefined,
	icon : undefined,
	init : function(icon){
		MailBox.icon = icon;
		MailBox.element = document.createElement("ul");
		MailBox.element.className = "mailbox";
		MailBox.addMail("Call of duty", "www.letters.com/call");
		icon.onclick = function(){
			PageHelper.loadPage("www.letters.com");
			MailBox.icon.style.display = "none";
		};
	},
	addMail : function(subject, url){
		console.log("added mail " + subject);
		var li = document.createElement("li");
		var a = document.createElement("a");
		a.href = "#";
		a.innerHTML = subject;
		a.onclick = function(){
			PageHelper.loadPage(url);
		};
		li.appendChild(a);
		MailBox.element.appendChild(li);

		MailBox.icon.style.display = "block";
	},
	asHTML : function(s){
		//console.log("rendered as " + MailBox.element.innerHTML);
		if(MailBox.element)
			return MailBox.element;
		else
			console.log("wanted reference to mailbox before it was made.");
	}
}

function PutInMailBox(url, elements){
	this.url = url;
	this.elements = elements;
}
/*
PutInMailBox.prototype = {
		
		//console.log("putting article in site: " + this.siteId);
		var site = Sites[this.siteId];
		var div = document.createElement("div");
		console.log(this.siteId);
		for (var i = 0; i < site.content.length; i++) {
			var element = site.content[i];
			var containernode = element.asHTML(onArticle);
			div.appendChild(containernode);
		};
		div.ztyle = site.style;
		return div;
	}
}*/