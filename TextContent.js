var Pages = {
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
	"page3" : {
		content : [
			new JustText("Henry Conway was declared bankrupt yesterday. The business mogul, whose "),
			new Clue("brother George ", "harolds_father_is_bankrupt"),
			new JustText("is well-known on these pages for his "),
			new Clue("business concerns in the Orient, ", "the_Conway_fortune_comes_from_China"),
			new JustText("was forced to put his company into administration."),
			new Link("?")
		],
		style : "??"
	}
}