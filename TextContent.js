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
	"www.scroogle.com/Beauly%20House" : {
		content : [
			new Header([new JustText("Scroogle")]),
			new JustText("Search: "),
			new StyledDiv([new JustText("Beauly House")], "bordered"),
			new Paragraph([
				new Header([new Link("Beauly House", "www.beuly-house.com")], "h3"),
				new StyledDiv([new Link("www.beuly-house.com", "www.beuly-house.com")], "small"),
				new JustText("The home of the Conways...<br/>")
			]),
			new Paragraph([
				new Header([new Link("Conway Bankrupt", "www.paper.com/bankrupcy")], "h3"),
				new StyledDiv([new Link("www.paper.com/bankrupcy", "www.paper.com/bankrupcy")], "small"),
				new JustText("The paper is your go-to place for all news...<br/>")
			])
		],
		style : "scroogle"
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
						new Link("Beauly House.", "www.scroogle.com/Beauly%20House"),
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
	"404" : {
		content : [
			new Header([new JustText("404")]),
			new JustText("Page not found!"),
		],
		style : "journal"
	},
	"www.paper.com/bankrupcy" : {
		content : [
			new Header([new JustText("The Paper")]),
			new Header([new JustText("Conway Bankrupt")], "h2"),
			new JustText("Henry Conway was declared bankrupt yesterday. The business mogul, whose "),
			new Clue("brother George ", "harolds_father_is_bankrupt"),
			new JustText("is well-known on these pages for his "),
			new Clue("business concerns in the Orient, ", "the_Conway_fortune_comes_from_China"),
			new JustText("was forced to put his company into administration."),
			new Link("?")
		],
		style : "paper"
	}
}