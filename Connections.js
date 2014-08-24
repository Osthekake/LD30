var Connections = {
	"freddy_is_dead" : {
		coords : [8, 6, 8, 7],
		tooltip : "Frederick Fitzcharles is dead.",
		onsolved : function(){
			MailBox.addMail("Coroners Report", "www.letters.com/2");
		}
	},


	"freddy_was_stabbed" : {
		coords : [8, 7, 8, 8],
		tooltip : "Frederick Fitzcharles was killed by stabbing.",
	},
	"freddy_struggled" : {
		coords : [7, 6, 8, 6],
		tooltip : "Frederick Fitzcharles died in a struggle.",
	},
	//connections for charles is heir:
	"charles_is_heir_to_beauly": {
		coords : [5, 1, 5, 4],
		tooltip : "Chales Weatherby is the heir to Beauly House.",
		children : ["charles_is_johns_son", "anne_had_an_elder_brother", "anne_has_only_daughters", "george_inherited_through_anne"]
	},
	"charles_is_johns_son" : {
		coords : [7, 1, 7, 2],
		tooltip : "Charles Weatherby is the natural son of John Beauly." //relates to jane_loves_charles
	},
	"anne_had_an_elder_brother" : {
		coords : [5, 1, 7, 2],
		tooltip: "John Beauly was Anne Conway's elder brother."
	},
	"anne_has_only_daughters" : {
		coords : [7, 2, 7, 3],
		tooltip : "All of Annes children are girls."
	},
	"george_inherited_through_anne" : {
		coords : [7, 3, 5, 4],
		tooltip : "George Conway married into Beauly House through Anne."
	},

	"anna_lost_knife" : {
		coords : [9, 7, 8, 8],
		tooltip : "Anna is missing a sharp object.",
		onsolved : function(){
			MailBox.addMail("My letter opener", "www.letters.com/3");
		}
	},

	"freddy_motive_to_kill_charles" : {
		coords : [5, 1, 4, 4],
		tooltip : "Frederick had a motive to kill charles.",
		children : ["charles_is_heir_to_beauly", "georgia_engaged_to_freddy", "freddy_had_a_gun"]
	},
	"georgia_engaged_to_freddy" : {
		coords : [3, 3, 4, 4],
		tooltip : "Georgia Conway is engaged to Freddy Fitzcharles."
	},
	"freddy_had_a_gun" : {
		coords : [5, 3, 4, 4],
		tooltip : "Freddy posessed a gun when he died."
	},
	


	"jane_and_anne_have_same_last_name" : {
		coords : [2, 0, 2, 1],
		tooltip : "Jane and Anne are both named Conway."
	},
	
	"john_is_janes_uncle" : {
		coords : [0, 0, 0, 0],
		tooltip : "John Beauly is Jane Conways uncle.",
		children : ["anne_had_an_elder_brother", "jane_and_anne_have_same_last_name"]
	},
	"jane_loves_charles" : {
		coords : [0, 0, 0, 0],
		tooltip : "Jane Conway is in love with Charles Weatherby." // relates to charles_is_johns_son, jane_killed_her_father
	},
	"freddy_sleeping_with_rosie" : {
		coords : [0, 0, 0, 0],
		tooltip : "Freddy has been having an affair with Rosie." // relates to georgia_engaged_to_freddy
	},
	"anna_loves_tall_mary" : {
		coords : [0, 0, 0, 0],
		tooltip : "Anna and Tall Mary are in a relationship." // relates to tall_mary_loves_anna, freddy_and_anna_mad
	},
	"tall_mary_secretly_engaged" : {
		coords : [0, 0, 0, 0],
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
	"anna_knows_freddys_secret" : {
		coords : [0, 0, 0, 0],
		tooltip : "Anna knows that Freddy is sleeping with Rosie." // relates to freddy_and_anna_mad, freddy_sleeping_with_rosie
	},
	"young_mary_fainting" : {
		coords : [0, 0, 0, 0],
		tooltip : "Young Mary has been fainting a lot."
	},
	"anne_addicted_to_laudanum" : {
		coords : [0, 0, 0, 0],
		tooltip : "Anne is addicted to laudanum."
	},
	"anne_knows_charles_is_nephew" : {
		coords : [0, 0, 0, 0],
		tooltip : "Anne knows Charles is her brother's son." // related to charles_is_johns_son
	},
	"rosie_daughter_alice_and_ned" : {
		coords : [0, 0, 0, 0],
		tooltip : "Rosie is the natural daughter of Ned Weatherby and Alice Blackwood."
	},
	"rosie_lazy" : {
		coords : [0, 0, 0, 0],
		tooltip : "Rosie's laziness goes unpunished by her parents." // related to rosie_daughter_alice_and_ned
	},
	"drawing_room_not_cleaned" : {
		coords : [0, 0, 0, 0],
		tooltip : "The Drawing Room has not been cleaned properly." // relates to rosie_lazy
	}
}
