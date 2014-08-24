Sites = {
	"www.letters.com" : {
		content : [
			new Header([new JustText("Your mail, your honor.")]),
			new StyledDiv([
				new StyledDiv(
					[
						new JustText("Inbox:<br/>"),
						new JustText("1 new mail<br/>"),
						new Link("Call of duty<br/>", "www.letters.com/1")
					],
					"left-box"
				),
				new StyledDiv([new Article("letter")], "letter")
			])
		],
		style : "mail"
	},
	"www.paper.com" : {
		content : [
			new Header([new JustText("The Paper")]),
			new Article("article")
		],
		style : "paper"
	},
	"www.beuly-house.com" : {
		content : [
			new Header([new JustText("Beauly House")]),
			new StyledDiv([
				new Link("Home", "www.beuly-house.com"),
				new Link("Work for us", "www.beuly-house.com/positions"),
				new Link("Our Business", "www.beuly-house.com/enterprise"),
				new Link("The Location", "www.beuly-house.com/location"),
				new Link("Contact", "www.beuly-house.com/contact")
			], "bar"),
			new Article("mansion")
		],
		style : "mansion"
	},
	"www.facespace.com" : {
		content : [
			new StyledDiv([
				new Header([new JustText("Facespace")]),
				new StyledDiv([new JustText("All the kings subjects.")], undefined, "font-family: 'Parisienne', cursive;")
			], "facehead"),
			new StyledDiv([
				new Article("face")		
			])
		],
		style : "face"
	}
}

var Pages = {
	"about:game" : {
		content : [
			new StyledDiv([
				new Header([new JustText("Welcome to the game!<br/>")]),
				new JustText("This is a game made for Ludum Dare 30<br/>"),
				new JustText("Instructions:<br/>"),
				new JustText("* Click on clues to build a case.<br/>"),
				new JustText("* Click on links to navigate around, or:<br/>"),
				new JustText("* Enter urls in the bar above.<br/>"),
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
	"www.letters.com/1" : new PutInSite("www.letters.com", {
		"letter" : [
			new JustText("Sent: 24.06.1904<br/>"),
			new JustText("To: detective@royal.detective.services.gov.uk<br/>"),
			new JustText("From: imperialguard@edwardroyalcourt.gov.uk<br/>"),
			new JustText("Subject: Call of duty<br/>"),
			new JustText("------------------------------------<br/><br/>"),
			new JustText("Dear Sir or Madam<br/><br/>"),
			new JustText("Mysterious circumstances have occured at "),
			new Link("Beauly House.", "www.scroogle.com/Beauly%20House"),
			new JustText(" Your special investigative skills, and unique intelligence resources are required. Commence investigation immediately.<br/><br/>"),
			new JustText("E<br/>")
		]			
	}),
	"www.beuly-house.com" : new PutInSite("www.beuly-house.com", {
		"mansion" : [
			new StyledDiv([
				new Image("img/mansion.jpg", 250, 200)
			], "", "float:right;"),
			new Paragraph([new JustText("Welcome to Beauly House. The home of the Conways.")])
		]
	}),
	"www.beuly-house.com/contact" : new PutInSite("www.beuly-house.com", {
		"mansion" : [
			new Header([new JustText("Contact information:")], "h2"),
			new Paragraph([new Link("George Conway", "www.facespace.com/georgec"), new JustText(": george@beuly-house.com")])
		]
	}),
	"www.beuly-house.com/positions" : new PutInSite("www.beuly-house.com", {
		"mansion" : [
			new Header([new JustText("Currently hiring:")], "h2"),
			new Paragraph([new Header([new JustText("Housemaid")], "h3"), new JustText("Clean, moral girl with good loyalty.")]),
			new Paragraph([new Header([new JustText("Gardener")], "h3"), new JustText("Self sufficient and skilled gardener with clean past.")]),
			new Paragraph([new JustText("Contact via mail for more information.")]),
		]
	}),
	"www.beuly-house.com/enterprise" : new PutInSite("www.beuly-house.com", {
		"mansion" : [
			new Header([new JustText("The Conway Enterprise")], "h2"),
			new Paragraph([new Header([new JustText("Conway Shipping")], "h3"), new JustText("We ship goods all the way to and from the far east.")]),
			new Paragraph([new JustText("Looking to invest? Contact george@beuly-house.com")]),
		]
	}),
	"www.beuly-house.com/location" : new PutInSite("www.beuly-house.com", {
		"mansion" : [
			new Header([new JustText("The Beauly Mansion")], "h2"),
			new Paragraph([new JustText("We have many floors.")]),
			new Paragraph([new JustText("Contact the Weatherbys for a tour of the grounds")]),
		]
	}),
	"www.facespace.com/georgec" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("George Conway")], "h2"),
			new JustText("Social status: Married to "), new Link("Anne Beauly", "www.facespace.com/anneb"),
			new StyledDiv([
				new Paragraph([new JustText("George Conway went fishing. (22.6.1904)<br/>"), new JustText("Harold Conway likes this.")])
				], "facehistory"
			)
		]
	}),
	"www.facespace.com/anneb" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("Anne Beauly")], "h2"),
			new JustText("Social status: Married to "), new Link("George Conway", "www.facespace.com/georgec"),
			new StyledDiv([
				new Paragraph([new JustText("no recent events.")])
				], "facehistory"
			)
		]
	}),
	"404" : {
		content : [
			new Header([new JustText("404")]),
			new JustText("Page not found!"),
		],
		style : "journal"
	},
	"www.paper.com/bankrupcy" : new PutInSite("www.paper.com", {
		"article" : [
			new Header([new JustText("Conway Bankrupt")], "h2"),
			new Header([new JustText("Date: 13.06.1904")], "h4"),
			new JustText("Henry Conway was declared bankrupt yesterday. The business mogul, whose "),
			new Clue("brother George ", "harolds_father_is_bankrupt"),
			new JustText("is well-known on these pages for his "),
			new Clue("business concerns in the Orient, ", "the_Conway_fortune_comes_from_China"),
			new JustText("was forced to put his company into administration."),
			new Link("?")
		]
	}),
	"www.paper.com/shipwreck" : new PutInSite("www.paper.com", {
		"article" : [
			new Header([new JustText("Ships Washed Ashore After Fierce Storm")], "h2"),
			new Header([new JustText("Date: 11.05.1904")], "h4"),
			new JustText("Following an unseasonable gale, several ships and small boat were found washed ashore down the coast, having been ripped away from their moorings in the night.<br/>"),
			new JustText("All of the craft have been returned to their rightful owners, with the exception of one clipper, the SS Nostromo, which appears to have been abandoned some time ago. Anyone with any information regarding this vessel should contact the harbourmaster at Linmouth.")
		]
	})
}