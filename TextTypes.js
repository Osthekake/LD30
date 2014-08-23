function JustText(theText){
	this.text = theText;
}

function Link(theText, link){
	this.text = theText;
	this.link = link;
}

function Clue(theText, whichClue){
	this.text = theText;
	this.whichClue = whichClue;
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
		span.className="clue";
		span.innerHTML = this.text;
		span.onclick = this.find(this.whichClue);
		return span;
	}
}