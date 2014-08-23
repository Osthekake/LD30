var Pages = {
	"about:game" : {
		content : [
			new StyledDiv([
				new Header([new JustText("Welcome to the game!<br/>")]),
				new JustText("This is a game made for Ludum Dare 30<br/>"),
				new JustText("Instructions:<br/>"),
				new JustText("* Click on clues to build a case.<br/>"),
				new JustText("* Click on links to navigate around, or:<br/>"),
				new JustText("* Enter urls or search words in the bar above.<br/>"),
				new StyledDiv([new Link("Start Game", "www.letters.com/1")], "bordered")
			], "centered")
		],
		style : "journal"
	},	
	"www.letters.com/1" : {
		content : [
			new Header([new JustText("Your mail, your honor.")]),
			new StyledDiv([
				new StyledDiv(
					[
						new JustText("Inbox:<br/>"),
						new Link("Call to duty<br/>", "www.letters.com/1")
					],
					"left-box"
				),
				new StyledDiv(
					[
						new JustText("Sent: 24.06.1864<br/>"),
						new JustText("To: detective@royal.detective.services.uk<br/>"),
						new JustText("From: imperialguard@edwardroyalcourt.uk<br/>"),
						new JustText("Subject: Call to duty<br/>"),
						new JustText("------------------------------------<br/><br/>"),
						new JustText("Dear Sir or Madam<br/><br/>"),
						new JustText("Mysterious circumstances have occured at "),
						new Link("Beauly House.", "www.beuly-house.com"),
						new JustText(" Your special investigative skills, and unique intelligence resources are required. Commence investigation immediately.<br/><br/>"),
						new JustText("E<br/>")
					],
					"letter"
				)
			])
		],
		style : "mail"
	},
	"www.beuly-house.com" : {
		content : [
			new Header([new JustText("Beauly House")]),
			new StyledDiv([
				new Image("img/mansion.jpg", 250, 200)
			], "", "float:right;"),
			new Paragraph([new JustText("Welcome to Beuly House")])
		],
		style : "mansion"
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