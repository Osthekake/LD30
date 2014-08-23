function Paragraph(nodes){
	this.nodes = nodes;
}

function Image(src, width, height){
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

Paragraph.prototype = {
	asHTML : function() {
		var p = document.createElement('p');
		for (var i = 0; i < this.nodes.length; i++) {
			p.appendChild(this.nodes[i].asHTML());
		};
		return p;
	}
}

Image.prototype = {
	asHTML : function() {
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
	asHTML : function() {
		var p = document.createElement(this.type);
		for (var i = 0; i < this.nodes.length; i++) {
			p.appendChild(this.nodes[i].asHTML());
		};
		return p;
	}
}

StyledDiv.prototype = {
	asHTML : function() {
		var div = document.createElement('div');
		if(this.clazz)
			div.className = this.clazz;
		if(this.style)
			div.style = this.style;
		for (var i = 0; i < this.nodes.length; i++) {
			div.appendChild(this.nodes[i].asHTML());
		};
		return div;
	}
}

JustText.prototype = {
	asHTML : function() {
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
	asHTML : function(){
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
	asHTML : function(){
		var span = document.createElement('span');
		span.className = "clue";
		span.innerHTML = " " + this.text + " ";
		span.onclick = this.find(this.whichClue);
		return span;
	}
}