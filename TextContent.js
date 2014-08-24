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
			new JustText("<hr/>"),
			new StyledDiv([
				new Header([new JustText("A small notice &dagger;")], "h4"),
				new Paragraph([
					new JustText("We regret to annonce "), 
					new Clue("that Frederick Fitzcharles died", "freddy_is_dead"), 
					new JustText(" last night at the age of 25. The burial will be announced at a later date. Our hearts reach out to those who are mourning.")
				])	
			], "notice"),
			new Article("article")
		],
		style : "paper"
	},
	"www.beauly-house.com" : {
		content : [
			new Header([new JustText("Beauly House")]),
			new StyledDiv([
				new Link("Home", "www.beauly-house.com"),
				new Link("Work for us", "www.beauly-house.com/positions"),
				new Link("Our Business", "www.beauly-house.com/enterprise"),
				new Link("The Location", "www.beauly-house.com/location"),
				new Link("Contact", "www.beauly-house.com/contact")
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
				new Header([new Link("Beauly House", "www.beauly-house.com")], "h3"),
				new StyledDiv([new Link("www.beauly-house.com", "www.beauly-house.com")], "small"),
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
	"www.beauly-house.com" : new PutInSite("www.beauly-house.com", {
		"mansion" : [
			new StyledDiv([
				new Image("img/mansion.jpg", 250, 200)
			], "", "float:right;"),
			new Paragraph([new JustText("Welcome to Beauly House. The home of the Conways.")])
		]
	}),
	"www.beauly-house.com/contact" : new PutInSite("www.beauly-house.com", {
		"mansion" : [
			new Header([new JustText("Contact information:")], "h2"),
			new Paragraph([new Link("George Conway", "www.facespace.com/georgec"), new JustText(": george@beauly-house.com")])
		]
	}),
	"www.beauly-house.com/positions" : new PutInSite("www.beauly-house.com", {
		"mansion" : [
			new Header([new JustText("Currently hiring:")], "h2"),
			new Paragraph([new Header([new JustText("Housemaid")], "h3"), new JustText("Clean, moral girl with good loyalty.")]),
			new Paragraph([new Header([new JustText("Gardener")], "h3"), new JustText("Self sufficient and skilled gardener with clean past.")]),
			new Paragraph([new JustText("Contact via mail for more information.")]),
		]
	}),
	"www.beauly-house.com/enterprise" : new PutInSite("www.beauly-house.com", {
		"mansion" : [
			new Header([new JustText("The Conway Enterprise")], "h2"),
			new Paragraph([new Header([new JustText("Conway Shipping")], "h3"), new JustText("We ship goods all the way to and from the far east.")]),
			new Paragraph([new JustText("Looking to invest? Contact george@beauly-house.com")]),
		]
	}),
	"www.beauly-house.com/location" : new PutInSite("www.beauly-house.com", {
		"mansion" : [
			new Header([new JustText("The Beauly Mansion")], "h2"),
			new Paragraph([new JustText("Three floors of treasures collected by generations of Beaulys.")]),
			new Paragraph([new JustText("Contact the Weatherbys for a tour of the grounds")]),
		]
	}),
	"www.facespace.com/georgec" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("George Conway")], "h2"),
			new JustText("Age: 44 "),
			new JustText("Social status: Married to "), new Link("Anne Beauly", "www.facespace.com/anneb"),
			new StyledDiv([
				new Paragraph([new JustText("George Conway went fishing. (22.6.1904)<br/>"), 
					new Link("Harold Conway", "www.facespace.com/haroldc"), 
					new JustText(" likes this.")])
				], "facehistory"
			)
		]
	}),
	"www.facespace.com/anneb" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("Anne Beauly")], "h2"),
			new JustText("Age: 46 "),
			new JustText("Social status: Married to "), new Link("George Conway", "www.facespace.com/georgec"),
			new StyledDiv([
				new JustText("(12.5.1906) Anne wrote on her brothers wall on his birthday:"),
				new Paragraph([new JustText("Miss you brother...")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new Link("Georgia Conway", "www.facespace.com/georgiac"), new JustText(" looking so pretty at the ball tonight. Love you dear!")])
				], "facehistory"
			),
	
		]
	}),
	"www.facespace.com/georgiac" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("Georgia Conway")], "h2"),
			new JustText("Age: 21 "),
			new JustText("Social status: Engaged to "), new Link("Frederick Fitzcharles", "www.facespace.com/fredf"),
			new StyledDiv([
				new Paragraph([new JustText("(14.02.1906) Georgia is now engaged to "), new Link("Frederick Fitzcharles", "www.facespace.com/fredf")]),
				new Paragraph([new Link("Jane Conway", "www.facespace.com/janec"), new JustText(" likes this.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("Finished my painting! The folly looks so beautiful at sunset!")]),
				new Paragraph ([new Link("Freddy Fitzcharles", "www.facespace.com/freddyf"), new JustText (" likes this.")])
				], "facehistory"
			),
		]
	}),
	"www.facespace.com/haroldc" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("Harold Conway")], "h2"),
			new JustText("Age: 22 "),
			new JustText("Social status: Single"),
			new StyledDiv([
				new Paragraph([new JustText("Big man is out. Cards tonight?")]),
				new StyledDiv([
					new Link("Anna Conway", "www.facespace.com/annac"),
					new JustText(" Totally!")
					], "facehistory"
				)
				], "facehistory"
			)
		]
	}),
	"www.facespace.com/fredf" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("Frederick Fitzcharles")], "h2"),
			new JustText("Age: 24 "),
			new JustText("Social status: Engaged to "), new Link("Georgia Conway", "www.facespace.com/georgiac"),
			new StyledDiv([
				new Paragraph([new JustText("Why wasn't I invited to go fishing?")]),
				new StyledDiv([
					new Link("Harold Conway", "www.facespace.com/haroldc"),
					new JustText(" Cards instead?")
					], "facehistory"
				)
				], "facehistory"
			)
		]
	}),
	"www.facespace.com/annac" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("Anna Conway")], "h2"),
			new JustText("Age: 20 "),
			new JustText("Social status: Single"),
			new StyledDiv([
				new Paragraph([new JustText("Has anyone seen my silver letter opener?")])
				], "facehistory"
			)
		]
	}),
	"www.facespace.com/janec" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("Jane Conway")], "h2"),
			new JustText("Age: 17 "),
			new JustText("Social status: Single"),
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