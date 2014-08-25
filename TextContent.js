Sites = {
	"www.letters.com" : {
		content : [
			new Header([new JustText("Your mail, your honour.")]),
			new StyledDiv([
				new StyledDiv(
					[
						new JustText("Inbox:<br/>"),
						MailBox,
						new JustText("Sent"),
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
					new JustText("We regret to announce "), 
					new Clue("the unexpected death of Lord Frederick Fitzcharles", "freddy_is_dead"), 
					new JustText(" last night at the age of 25. Funeral arrangements will be announced at a later date. Our hearts reach out to those who are mourning.")
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
				new StyledDiv([new JustText("All the King's subjects.")], undefined, "font-family: 'Parisienne', cursive;")
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
				new JustText("* The green envelope means you have mails. Click it to read your mails!<br/>"),
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
			]),
			new Paragraph([
				new Header([new Link("Ships Ashore", "www.paper.com/shipwreck")], "h3"),
				new StyledDiv([new Link("www.paper.com/shipwreck", "www.paper.com/shipwreck")], "small"),
				new JustText("The paper is your go-to place for all news...<br/>")
			])
		],
		style : "scroogle"
	},	
	"www.letters.com" : new PutInSite("www.letters.com", {
		"letter" : [
			new JustText("Select an email on the left")
		], 
		reload : true
	}),
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
		], 
		reload : true			
	}),
	"www.letters.com/2" : new PutInSite("www.letters.com", {
		"letter" : [
			new JustText("Sent: 25.06.1904<br/>"),
			new JustText("To: detective@royal.detective.services.gov.uk<br/>"),
			new JustText("From: coroner@edwardroyalcourt.gov.uk<br/>"),
			new JustText("Subject: Coroner's report<br/>"),
			new JustText("------------------------------------<br/><br/>"),
			new JustText("The deceased ("), new Link("Frederick Fitzcharles", "www.facespace.com/fredf"),
			new JustText(") died from being "), 
			new Clue("stabbed by a sharp object.", "freddy_was_stabbed"),
			new JustText(" His arms show "),
			new Clue("signs of struggle", "freddy_struggled"),
			new JustText(", and a "),
			new Clue("gun", "freddy_had_a_gun"),
			new JustText(" belonging to "),
			new Link("George Conway", "www.facespace.com/georgec"),
			new JustText(" was found near the body. <br/><br/>G")	
		], 
		reload : true
	}),
	"www.letters.com/3" : new PutInSite("www.letters.com", {
		"letter" : [
			new JustText("Sent: 25.06.1904<br/>"),
			new JustText("To: detective@royal.detective.services.gov.uk<br/>"),
			new JustText("From: annac@beauly-house.com<br/>"),
			new JustText("My letter opener<br/>"),
			new JustText("------------------------------------<br/><br/>"),
			new JustText("Hey.<br/>Last night I realised that I'm missing my silver letter opener. "),
			new JustText("It's very sharp. Do you think it's the weapon that killed Freddy? "),
			new JustText("Does that mean the killer was in my room? I'm scared!<br/><br/>Anna"),
			new JustText("<br/><br/>PS: Don't bother replying. I can't open it anyway...")
		], 
		reload : true
	}),
	"www.beauly-house.com" : new PutInSite("www.beauly-house.com", {
		"mansion" : [
			new StyledDiv([
				new MImage("img/mansion.jpg", 250, 200)
			], "", "float:right;"),
			new Paragraph([new JustText("Welcome to Beauly House, the ancestral home of the Beauly family since the reign of Queen Elizabeth.")])
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
			new Paragraph([new Header([new JustText("Housemaid")], "h3"), new JustText("Clean, moral girl with loyal disposition and good work ethic.")]),
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
			new Paragraph([new JustText("The original manor house has been much improved on over the years, but original fittings can still be seen in the kitchens and at the rear of the house.")]),
			new Paragraph([new JustText("Much of the reconstruction of the house was completed by J. Michael Beauly, the great-uncle of Anne Conway (née Beauly), who was much inspired by the architectural styes of New England in his journeys to the United States. Beauy House is the only surviving example of his unique style; he built four other houses in the county, but all of them have since been lost to fire or misadventure. J. Michael Beauly was particularly pleased with Beauly House, and described it as his last and greatest work.")]),
			new Paragraph([new JustText("The grounds are extensive, and boast a unique folly constructed by John Henry Beauly and his wife Marie Cameron Beauly in 1746. Built before the fashion for follies really took off, family lore has it that the Beaulys started the craze for such features, whilst local lore has it that Marie Cameron Beauly, a noted Jacobite, had the gold she was hoarding for Bonnie Prince Charlie"), new Clue(" buried beneath it", "gold_buried_under_folly"), new JustText(", vowing that no-one should have it if he did not.")]),
			new Paragraph([new JustText("Contact the housekeeper"), new Link(" Mrs Blackwood", "www.facespace.com/aliceb"), new JustText(" for a tour of the house and grounds.")]),
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
				new Paragraph([new JustText("Nearly finished my painting! The folly looks so beautiful at sunset!")]),
				new Paragraph([new Link("Frederick Fitzcharles", "www.facespace.com/fredf"), new JustText (" likes this.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new Link("Frederick Fitzcharles", "www.facespace.com/fredf"), new JustText(" Where are you? You keep disappearing! xx")]),
				new StyledDiv([
					new Link("Frederick Fitzcharles", "www.facespace.com/fredf"),
					new JustText("Sorry darling, I've been busy working on a surprise. TTYL")
					], "facehistory"
				)
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("I love my little sisters! They're so talented!")]),
				new Paragraph([new Link("Frederick Fitzcharles", "www.facespace.com/fredf"), new JustText(" likes this.")]),
				new Paragraph([new Link("Jane Conway", "www.facespace.com/janec"), new JustText(" likes this")]),
				new Paragraph([new Link("Anna Conway", "www.facespace.com/annac"), new JustText(" likes this")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("Loved Anna's singing last night! Voice of an angel!")]),
				new Paragraph([new Link("Frederick Fitzcharles", "www.facespace.com/fredf"), new JustText (" likes this.")]),
				new Paragraph([new Link("Anna Conway", "wwww.facespace.com/annac"), new JustText(" likes this.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("Painting the folly today with the new paints Daddy gave me!")]),
				new Paragraph([new Link("Frederick Fitzcharles", "www.facespace.com/fredf"), new JustText (" likes this.")]),
				new Paragraph([new Link("George Conway", "wwww.facespace.com/georgec"), new JustText(" likes this.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("Love my new necklace!!")]),
				new Paragraph([new Link("Frederick Fitzcharles", "www.facespace.com/fredf"), new JustText (" likes this.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("Really looking forward to seeing my darling Freddy tonight!! xoxoxoxo")]),
				new Paragraph([new Link("Frederick Fitzcharles", "www.facespace.com/fredf"), new JustText (" likes this.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("(14.02.1906) Georgia "), new Clue("is now engaged", "georgia_engaged_to_freddy"), 
				new JustText(" to "), new Link("Frederick Fitzcharles", "www.facespace.com/fredf")]),
				new Paragraph([new Link("Jane Conway", "www.facespace.com/janec"), new JustText(" likes this.")])
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
				new Paragraph([new JustText("Has anyone seen my "), new Clue("silver letter opener?", "anna_lost_knife")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("Anyone else ever feel like they were born in the wrong time?")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("She walks in beauty, like the night<br/>"),
					new JustText("Of cloudless climes and starry skies;<br/>"),
					new JustText("And all that's best of dark and bright<br/>"),
					new JustText("Meet in her aspect and her eyes")]),
				new Paragraph([new Link("Mary Tallman", "www.facespace.com/maryt"), new JustText(" likes this.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("Singing scales. Need to get practice in for tonight!")])
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
				new Paragraph([new JustText("another argument with parents. old people are so stupid.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("found out a really big secret today and don't know what to do")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("i'm bored of all of these black covered pictures, why don't we take them down and put up some of Georgia's?")]),
				new Paragraph([new Link("Georgia Conway", "www.facespace.com/georgiac"), new JustText(" likes this.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("god noone ever listens to me")]),
				new StyledDiv([
					new Link("Harold Conway", "www.facespace.com/haroldc"),
					new JustText(" *no-one :P")
					], "facehistory"
				)
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("literally so bored i could die right now.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("okay fine i hate all the people except Charles :) ")]),
				new Paragraph([new Link("Charles Weatherby", "www.facespace.com/charlesw"), new JustText(" likes this.")])
				], "facehistory"
			),new StyledDiv([
				new Paragraph([new JustText("the house feels really full. because it is. i hate people.")]),
				new StyledDiv([
					new Link("Charles Weatherby", "www.facespace.com/charlesw"),
					new JustText(" Even me? Q.Q")
					], "facehistory"
				)
				], "facehistory"
			)
		]
	}),
	"www.facespace.com/maryt" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("Mary Tallman")], "h2"),
			new JustText("Age: 19 "),
			new JustText("Social status: It's complicated "),
			new JustText("Works as: housemaid at Beauly House"),
			new StyledDiv([
				new Paragraph([new JustText("really liked Miss Anna's new dress tonight, very chic")]),
				new Paragraph([new Link("Anna Conway", "www.facespace.com/annac"), new JustText (" likes this.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("did anyone clean the morning room?")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("am running around like a blue arsed fly >.<")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("had a rough day at work but everything settled thanks to charles")]),
				new Paragraph([new Link("Charles Weatherby", "www.facespace.com/charlesw"), new JustText (" likes this.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("wonder how certain people have so much time to write on facespace when they should be working?")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("rocking my new stockings!")]),
				new Paragraph([new Link("Charles Weatherby", "www.facespace.com/charlesw"), new JustText (" likes this.")]),
				new Paragraph([new Link("Anna Conway", "www.facespace.com/annac"), new JustText (" likes this.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("looking forward to having tonight off")]),
				new Paragraph([new Link("Anna Conway", "www.facespace.com/annac"), new JustText (" likes this.")])
				], "facehistory"
			)
		]
	}),
	"www.facespace.com/maryy" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("Mary Younger")], "h2"),
			new JustText("Age: 45 "),
			new JustText("Social status: Single "),
			new JustText("Works as: housemaid at Beauly House"),
			new StyledDiv([
				new Paragraph([new JustText("I love my coworkers so much, they're such stars.")]),
				new Paragraph([new Link("Mary Tallman", "www.facespace.com/maryt"), new JustText (" likes this.")]),
				new Paragraph([new Link("Rosie Blackwood", "www.facespace.com/rosieb"), new JustText (" likes this.")]),
				new Paragraph([new Link("Charles Weatherby", "www.facespace.com/charles w"), new JustText (" likes this.")]),
				new Paragraph([new Link("Mary Weatherby", "www.facespace.com/maryw"), new JustText (" likes this.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("I'm feeling much better today.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("Taking my half day today.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("Feeling a little woozy fi8ohgaz'phawujdba")]),
				new StyledDiv([
					new Link("Mary Tallman", "www.facespace.com/maryt"),
					new JustText(" you ok hun?")
					], "facehistory"
				)
			),
			new StyledDiv([
				new Paragraph([new JustText("Didn't have enough time for breakfast and I'm really suffering for it.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("Feeling poorly this evening again.")])
				], "facehistory"
			)
		]
	}),
	"www.facespace.com/rosieb" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("Rosie Blackwood")], "h2"),
			new JustText("Age: 16 "),
			new JustText("Social status: single "),
			new JustText("Works as: housemaid at Beauly House"),
			new StyledDiv([
				new Paragraph([new JustText("oops think sum1 saw us lol")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("goin to the folly with my man yay")]) // needs clue link
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("so in luv!!!")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("finishd cleanin really fast lol")]) // needs clue
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("present from mystery man! <3")]) // needs clue
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("was i suposed 2 clean the drawin rm or the dinin rm cant rember lol")]),
				new StyledDiv([
					new Link("Mary Tallman", "www.facespace.com/maryt"),
					new JustText(" Both. hurry it up.")
					], "facehistory"
				)
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("i thot only old ppl got hangovers lol")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("feel a bit sick lol")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("lotsa wine left over from dinner yum")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("oops not suposed 2 say lol")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("guess whose got a new man!!!")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("omg my hands hurt so much :( ")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("so tired of cleanin evrythin")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("gotta do so much 2day young marys takin her 1/2 day early wtf")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("kitchen cat has kittens!!! omg so kewt!!!!")]),
				new Paragraph([new Link("Mary Tallman", "www.facespace.com/maryt"), new JustText(" likes this.")]),
				new Paragraph([new Link("Mary Younger", "www.facespace.com/maryy"), new JustText(" likes this.")]),
				new Paragraph([new Link("Mary Helen Weatherby", "www.facespace.com/maryw"), new JustText(" likes this.")]),
				new Paragraph([new Link("Alice Blackwood", "www.facespace.com/aliceb"), new JustText(" likes this.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("lookin at the horsies!")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("eatin early thx mum")]),
				new Paragraph([new Link("Alice Blackwood", "www.facespace.com/aliceb"), new JustText(" likes this.")])
				], "facehistory"
			),
			new StyledDiv([
				new Paragraph([new JustText("takin a nap lol")])
				], "facehistory"
			)
		]
	}),
	"www.facespace.com/charlesw" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("Charles Weatherby")], "h2"),
			new JustText("Age: 23 "),
			new JustText("Social status: Single "),
			new JustText("Works as: footman at Beauly House"),
			new StyledDiv([
				new Paragraph([new JustText("no recent events.")])
				], "facehistory"
			)
		]
	}),
	"www.facespace.com/edwardw" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("Edward Weatherby")], "h2"),
			new JustText("Age: 50 "),
			new JustText("Social status: Married to"), new Link("Mary Helen Weatherby ", "www.facespace.com/maryw"),
			new JustText("Works as: butler at Beauly House"),
			new StyledDiv([
				new Paragraph([new JustText("no recent events.")])
				], "facehistory"
			)
		]
	}),
	"www.facespace.com/maryw" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("Mary Helen Weatherby")], "h2"),
			new JustText("Age: 46 "),
			new JustText("Social status: Married to"), new Link("Edward Weatherby ", "www.facespace.com/edwardw"),
			new JustText("Works as: cook at Beauly House"),
			new StyledDiv([
				new Paragraph([new JustText("no recent events.")])
				], "facehistory"
			)
		]
	}),
	"www.facespace.com/aliceb" : new PutInSite("www.facespace.com", {
		"face" : [
			new Header([new JustText("Alice Blackwood")], "h2"),
			new JustText("Age: 55 "),
			new JustText("Social status: Widowed "),
			new JustText("Works as: housekeeper at Beauly House"),
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
			new JustText("was forced to put his company into administration.<br/><br/>"),
			new JustText("This is not the first time this week that George Conway's friends and relations have been hit with a financial scandal. His former business partner and close personal friend Charles Fitzcharles, Lord Linmouth, was forced to liquidate several assets in order to meet various obligations. Lord Linmouth's son,"),
			new Clue(" Lord Frederick Fitzcharles,", "freddy_financial_troubles"),
			new JustText(" refused to comment when approached by this paper.<br/><br/>"),
			new Link("?")
		]
	}),
	"www.paper.com/archived/1882" : new PutInSite("www.paper.com", {
		"article" : [
			new Header([new JustText("Births, Marriages and Deaths")], "h2"),
			new Header([new JustText("Date: 21.04.1882")], "h4"),
			new JustText("It is with great pleasure that we announce the engagement of Miss Anne Beauly of Beauly House to Mr George Conway. This newspaper shared in the Beauly family's distress at the "),
			new Clue("death of John Beauly, ", "anne_had_an_elder_brother"),
			new JustText("known to family and friends as Jack, last year of diptheria, and we are pleased to share in the joy of this union.<br/><br/>"),
			new JustText("Mr Conway is a business-man of some reknown, having made wise investments from his inheritance several years ago, and sources close to him say that he is keen to expand further into the Far East with "),
			new Clue("his soon-to-be-wife's fortune, ", "george_inherited_through_anne"),
			new JustText("who is the sole inheritor of the Beauly estate following the death of her elder brother "),
			new Clue("without issue.", "johns_child_precedence_over_anne"),
			new JustText(" We wish Miss Beauly and Mr Conway the best for their future lives together.<br/><br/>"),
			new JustText("Finally, we are pleased to announce the birth of a baby boy to Mr and Mrs Edward Weatherby, married six months ago in St Ethelred's Parish Church. Mr Weatherby is known to many in the parish as the head butler at Beauly House. Charles Edward Weatherby was "),
			new Clue("born early but is a healthy size,", "charles_conceived_out_of_wedlock"),
			new JustText(" and both mother and baby are doing well.<br/><br/>"),
			new Link("?")
		]
	}),
	"www.paper.com/shipwreck" : new PutInSite("www.paper.com", {
		"article" : [
			new Header([new JustText("Ships Washed Ashore After Fierce Storm")], "h2"),
			new Header([new JustText("Date: 11.05.1904")], "h4"),
			new JustText("Following an unseasonable gale, several ships and small boats were found washed ashore down the coast, having been ripped away from their moorings in the night.<br/>"),
			new JustText("Conway Enterprises has ensured that all of the craft have been returned to their rightful owners, with the exception of one clipper, the SS Nostromo, which appears to have been abandoned some time ago. Anyone with any information regarding this vessel should contact the harbourmaster at Linmouth, or George Conway at Beauly House.<br/>"),
			new MImage("img/women.jpg", 150, 250),
			new JustText("<br/>(in the picture:) Anne Conway and "),
			new Clue("her three daughters", "anne_has_only_daughters"),
			new JustText(" are looking at the ships.")
		]
	})
}