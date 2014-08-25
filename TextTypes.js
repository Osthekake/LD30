function Article(articleId){
	this.articleId = articleId;
}

function PutInSite(siteId, node_object){
	this.siteId = siteId;
	this.node_object = node_object;
}

function Paragraph(nodes){
	this.nodes = nodes;
}

function MImage(src, width, height){
	this.src = src;
	this.width = width;
	this.height = height;
}

function StyledDiv(nodes, clazz, style){
	this.nodes = nodes;
	this.clazz = clazz;
	this.style = style;
}

function JustText(theText){
	this.text = theText;
}

function Header(nodes, type){
	this.nodes = nodes;
	this.type = type || "h1";
}


function Link(theText, link){
	this.text = theText;
	this.link = link;
}

function Clue(theText, whichClue){
	this.text = theText;
	this.whichClue = whichClue;
}

Article.prototype = {
	asHTML : function(onArticle) {
		var p = document.createElement('div');
		//p.innerHTML = "Missing article here: " + this.articleId;
		if(onArticle)
			onArticle(this.articleId, p);
		else
			console.log("Got to an article, but no onArticle was defined!");
		return p;
	}
}

PutInSite.prototype = {
	asHTML : function(s) {
		var node_object = this.node_object;
		var onArticle = function(articleId, container){
			//console.log("Building article " + articleId);
			var nodes = node_object[articleId];
			for (var i = 0; i < nodes.length; i++) {
				var node = nodes[i]
				if(node)
					container.appendChild(node.asHTML(s));
				else
					console.log("missing node " + articleId + " for article implementation");
			};
		};
		//console.log("putting article in site: " + this.siteId);
		var site = Sites[this.siteId];
		var div = document.createElement("div");
		//console.log(this.siteId);
		for (var i = 0; i < site.content.length; i++) {
			var element = site.content[i];
			var containernode = element.asHTML(onArticle);
			//console.log(containernode);
			div.appendChild(containernode);
		};
		if(node_object.reload)
			div.reload = true;	
		div.ztyle = site.style;
		return div;
	}
}

Paragraph.prototype = {
	asHTML : function(s) {
		var p = document.createElement('p');
		for (var i = 0; i < this.nodes.length; i++) {
			p.appendChild(this.nodes[i].asHTML(s));
		};
		return p;
	}
}

MImage.prototype = {
	asHTML : function(s) {
		var img = document.createElement('img');
		img.src = this.src;
		if(this.width)
			img.width = this.width;
		if(this.height)
			img.height = this.width;
		return img;
	}	
}

Header.prototype = {
	asHTML : function(s) {
		var p = document.createElement(this.type);
		for (var i = 0; i < this.nodes.length; i++) {
			//console.log(this.nodes[i]);
			p.appendChild(this.nodes[i].asHTML(s));
		};
		return p;
	}
}

StyledDiv.prototype = {
	asHTML : function(s) {
		var div = document.createElement('div');
		if(this.clazz)
			div.className = this.clazz;
		if(this.style)
			div.style = this.style;
		for (var i = 0; i < this.nodes.length; i++) {
			div.appendChild(this.nodes[i].asHTML(s));
		};
		return div;
	}
}

JustText.prototype = {
	asHTML : function(s) {
		var span = document.createElement('span');
		span.innerHTML = this.text;
		return span;
	}
}

Link.prototype = {
	follow : function(pageid){
		return function(){
			PageHelper.loadPage(pageid);
		};
	},
	asHTML : function(s){
		var a = document.createElement('a');
		a.innerHTML = this.text;
		a.onclick = this.follow(this.link);
		a.href="#";
		return a;
	}
}

Clue.prototype = {
	find : function(clue){
		return function() {
			ConnectionHelper.solve(clue);
		};
	},
	asHTML : function(s){
		var span = document.createElement('span');
		span.className = "clue";
		span.innerHTML = " " + this.text + " ";
		span.onclick = this.find(this.whichClue);
		return span;
	}
}