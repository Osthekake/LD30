var Connections = {

	/*
	 *	Please note the *s	
	 *	connections marked with a * still need a clue related to them
	*/

	"freddy_is_dead" : {
		coords : [4, 0, 4, 1],
		tooltip : "Frederick Fitzcharles is dead.",
		onsolved : function(){
			MailBox.addMail("Coroner", "www.letters.com/coroner");
		}
	},

	"freddy_was_stabbed" : {
		coords : [4, 1, 4, 2],
		tooltip : "Frederick Fitzcharles was killed by stabbing.",
	},
	"freddy_struggled" : {
		coords : [4, 7, 4, 8],
		tooltip : "Frederick Fitzcharles died in a struggle.",
	},/*
	"charles_no_alibi" : {
		coords : [2, 6, 4, 8],
		tooltip : "Charles has no alibi for the time when Freddy was murdered.",
		children : []//need subconnections for this I guess?
	},*/
	"charles_means" : {
		coords : [7, 7, 4, 8],
		tooltip : "Charles had the means to kill Freddy.",
		children : ["anna_lost_knife", "georgia_found_knife"]
	},
	"freddy_tried_to_kill_charles" : {
		coords : [4, 5, 4, 7],
		tooltip : "Frederick attempted to murder Charles.",
		children : ["freddy_motive_to_kill_charles", "charles_was_with_freddy", "freddy_had_a_gun"]
	},

	"anna_has_alibi" : {
		coords : [5, 0, 5, 1],
		tooltip : "Anna was playing cards at the time of the murder"
	},

	"charles_was_with_freddy" : {
		coords : [5, 6, 4, 7],
		tooltip : "Charles was meeting Freddy before he died."
	},
	"charles_killed_freddy" : {
		coords : [4, 8, 4, 10],
		tooltip : "Charles killed Freddy in self-defense.",
		children : ["charles_means", "freddy_tried_to_kill_charles", "rosie_mother_not_killer", "anna_has_alibi"],
		onsolved : function(){
			MailBox.addMail("Solved", "www.letters.com/solved");
		}
	},

	//connections for charles is heir:
	"charles_is_heir_to_beauly": {
		coords : [6, 1, 6, 4],
		tooltip : "Chales Weatherby is the heir to Beauly House.",
		children : ["charles_is_johns_son", "johns_child_precedence_over_anne", "george_inherited_through_anne"]
	},
	"johns_child_precedence_over_anne" : {
		coords : [6, 1, 7, 2],
		tooltip : "John's child inherits Beauly House before Anne." // relates to charles_is_heir_to_beauly
	},
	"charles_conceived_out_of_wedlock" : {
		coords : [7, 0, 6, 1],
		tooltip : "Charles was conceived before his parents got married." // relates to charles_is_johns_son
	},
	"charles_is_johns_son" : {
		coords : [7, 2, 7, 3],
		tooltip : "Charles Weatherby is the spitting image of John Beauly.",
	},
	"anne_had_an_elder_brother" : {
		coords : [6, 0, 6, 1],
		tooltip: "John Beauly was Anne Conway's elder brother."
	},
	"anne_has_only_daughters" : {
		coords : [8, 2, 7, 3],
		tooltip : "All of Anne's children are girls."
	},
	"george_inherited_through_anne" : { 
		coords : [7, 3, 6, 4],
		tooltip : "George Conway married into Beauly House through Anne."
	},

	"anna_lost_knife" : {
		coords : [5, 1, 4, 2],
		tooltip : "Anna is missing a sharp silver letter opener.",
		onsolved : function(){
			MailBox.addMail("Weapon", "www.letters.com/weapon");
		}
	},

	"freddy_motive_to_kill_charles" : {
		coords : [6, 4, 4, 5],
		tooltip : "Frederick had a motive to kill charles.",
		children : ["charles_is_heir_to_beauly", "georgia_engaged_to_freddy", "freddy_financial_troubles"]
	},
	"georgia_engaged_to_freddy" : {
		coords : [3, 3, 4, 4],
		tooltip : "Georgia Conway is engaged to Freddy Fitzcharles."
	},
	"freddy_had_a_gun" : {
		coords : [4, 5, 5, 6],
		tooltip : "Freddy posessed a gun when he died."
	},
	"georgia_motive" : {
		coords : [4, 2, 5, 5],
		tooltip : "Georgia has a motive to kill Frederick.",
		children : ["freddy_sleeping_with_rosie", "georgia_knows_freddys_secret"]
	},
	"georgia_alibi" : {
		coords : [5, 5, 7, 6],
		tooltip : "Jane was watching Georiga paint at the time of the murder."
	},
	"georgia_found_knife" : {
		coords : [7, 6, 7, 7],
		tooltip : "Georgia found the letter opener, and gave it to Charles."
	},
	"rosie_mother_motive" : {
		coords : [3, 3, 2, 4],
		tooltip : "Alice Blackwood has a motive to kill Frederick.",
		children : ["freddy_sleeping_with_rosie", "rosie_mother_knows_freddys_secret"]
	},
	"rosie_mother_alibi" : {//*
		coords : [2, 4, 4, 7],
		tooltip : "Alice Blackwood was scolding Rosie at the time of the murder.",
		children : ["alice_rosie_argument", "anne_overhears_argument"]
	},
	"alice_rosie_argument" : {
		coords : [2, 5, 4, 7],
		tooltip : "Georgia and Rosie were arguing at the time of the murder." // relates to georgia_alibi
	},
	"anne_overhears_argument" : {
		coords : [2, 4, 2, 5],
		tooltip : "Anne heard shouting." // relates to georgia_alibi
	},
	"rosie_mother_not_killer" : {
		coords : [3, 3, 4, 7],
		tooltip : "Alice Blackwood did not kill Freddy.",
		children : ["rosie_mother_motive", "rosie_mother_alibi"]
	},

	"freddy_sleeping_with_rosie" : { 
		coords : [4, 2, 3, 3],
		tooltip : "Freddy has been having an affair with Rosie.", // relates to georgia_engaged_to_freddy
		children: ["rosie_mother_knows_freddys_secret"]
	},
	"georgia_knows_freddys_secret" : { 
		coords : [4, 4, 5, 5],
		tooltip : "Georgia knows that Freddy is sleeping with Rosie." // relates to freddy_and_anna_mad, freddy_sleeping_with_rosie
	},
	"rosie_mother_knows_freddys_secret" : { 
		coords : [2, 2, 3, 3],
		tooltip : "Alice Blackwood knows that Freddy is sleeping with Rosie." // relates to freddy_and_anna_mad, freddy_sleeping_with_rosie
	},/*
	"anna_loves_tall_mary" : {
		coords : [1, 3, 1, 4],
		tooltip : "Anna and Tall Mary are in a relationship." // relates to tall_mary_loves_anna, freddy_and_anna_mad
	},
	"tall_mary_secretly_engaged" : {
		coords : [2, 3, 1, 4],
		tooltip : "Tall Mary has been secretly engaged for several years." // relates to anna_loves_tall_mary, tall_mary_loves_anna
	},
	"tall_mary_loves_anna" : {
		coords : [0, 0, 0, 0],
		tooltip : "Tall Mary wants to end her engagement." // relates to tall_mary_secretly_engaged, anna_loves_tall_mary
	},
	"freddy_and_anna_mad" : {
		coords : [0, 0, 0, 0],
		tooltip : "Freddy and Anna have agreed to keep each other's secrets."
	},
	"freddy_knows_annas_secret" : {
		coords : [0, 0, 0, 0],
		tooltip : "Freddy knows that Anna is sleeping with Tall Mary." // relates to freddy_and_anna_mad, anna_loves_tall_mary
	},
	"young_mary_fainting" : {
		coords : [0, 0, 0, 0],
		tooltip : "Young Mary has been fainting a lot."
	},
	"anne_addicted_to_laudanum" : {
		coords : [0, 0, 0, 0],
		tooltip : "Anne is addicted to laudanum."
	},*/
	"rosie_lazy" : {
		coords : [1, 6, 1, 7],
		tooltip : "Rosie's laziness goes unpunished by her mother.",
		onsolved : function(){
			MailBox.addMail("Go away", "www.letters.com/leave");
		}
	},
	"drawing_room_not_cleaned" : {
		coords : [1, 5, 1, 6],
		tooltip : "The Drawing Room has not been cleaned properly." // relates to rosie_lazy, georgia_found_knife
	},
	"freddy_financial_troubles" : {
		coords : [3, 1, 4, 2],
		tooltip : "Freddy's family was having financial difficulty." // relates to freddy_motive_to_kill_charles
	},
	"gold_buried_under_folly" : {
		coords : [8, 5, 8, 6],
		tooltip : "Jacobite gold is rumoured to be buried under the folly.", // red herring clue!
		onsolved : function(){
			MailBox.addMail("Article", "www.letters.com/article"); // actually important!
		}
	},
	
	
}
