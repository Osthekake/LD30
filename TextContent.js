var Pages = {
	"about:game" : {
		content : [
			new JustText("Welcome to the game!<br/>"),
			new Link("Start", "www.letters.com")
		],
		style : "journal"
	},	
	"www.letters.com" : {
		content : [
			new JustText("You have mail!<br/>"),
			new Link("Investigate murder.", "page1")
		],
		style : "journal"
	},
	"page1" : {
		content : [
			new JustText("This text is just a normal text."),
			new JustText("Texts will appear after each other with no visual impact, even if you split them up like this."),
			new JustText("The point of this will become apparent when we introduce clues:<br/>"),
			new JustText("Anne Conway went to the ball last night. She was there with "),
			new Clue("her three daughters ", "anne_has_daughters"),
			new JustText("and "),
			new Clue("her husband George. ", "anne_is_married_to_george"),
			new JustText("<br/>Texts can contain HTML, and this is a link:<br/>"),
			new Link("Next page", "page2")
		],
		style : "journal"
	},
	"page2" : {
		content : [
			new JustText("More clues for fun:<br/>"),
			new Clue("Jane's last name is Conway!<br/>", "jane_and_anne_have_same_last_name"),
			new Clue("Jane murdered her own father!<br/>", "jane_killed_her_father"),
			new Link("Previous page", "page1")
		],
		style : "journal"
	}
}