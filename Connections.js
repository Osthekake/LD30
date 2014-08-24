var Connections = {
	"jane_killed_george" : {
		coords : [0, 0, 3, 1],
		tooltip : "Jane Conway killed George Conway.",
		children : ["anne_had_an_elder_brother", "jane_killed_her_father", "anne_is_married_to_george", "jane_and_anne_have_same_last_name"]
	},
	"anne_had_an_elder_brother" : {
		coords : [1, 0, 2, 0],
		tooltip: "John Beauly was Anne Conway's elder brother."
	},
	"jane_killed_her_father" : {
		coords : [2, 1, 3, 1],
		tooltip : "Jane Conway killed her father."
	},
	"anne_is_married_to_george" : {
		coords : [0, 0, 1, 0],
		tooltip : "Anne and George Conway are married."
	},
	"jane_and_anne_have_same_last_name" : {
		coords : [2, 0, 2, 1],
		tooltip : "Jane and Anne are both named Conway."
	},
	"charles_is_johns_son" : {
		coords : [ location, leads to],
		tooltip : "Charles Weatherby is the natural son of John Beauly." //relates to jane_loves_charles
	},
	"jane_loves_charles" : {
		coords : [ location, leads to],
		tooltip : "Jane Conway is in love with Charles Weatherby." // relates to charles_is_johns_son, jane_killed_her_father
	},
	"georgia_engaged_to_freddy" : {
		coords : [ location, leads to],
		tooltip : "Georgia Conway is engaged to Freddy Fitzcharles."
	},
	"freddy_sleeping_with_rosie" : {
		coords : [ location, leads to],
		tooltip : "Freddy has been having an affair with Rosie." // relates to georgia_engaged_to_freddy
	},
	"anna_loves_tall_mary" : {
		coords : [ location, leads to],
		tooltip : "Anna and Tall Mary are in a relationship." // relates to tall_mary_loves_anna, freddy_and_anna_mad
	},
	"tall_mary_secretly_engaged" : {
		coords : [ location, leads to],
		tooltip : "Tall Mary has been secretly engaged for several years." // relates to anna_loves_tall_mary, tall_mary_loves_anna
	},
	"tall_mary_loves_anna" : {
		coords : [ location, leads to],
		tooltip : "Tall Mary wants to end her engagement." // relates to tall_mary_secretly_engaged, anna_loves_tall_mary
	},
	"freddy_and_anna_mad" : {
		coords : [ location, leads to],
		tooltip : "Freddy and Anna have agreed to keep each other's secrets."

	},
	"freddy_knows_annas_secret" : {
		coords : [ location, leads to],
		tooltip : "Freddy knows that Anna is sleeping with Tall Mary." // relates to freddy_and_anna_mad, anna_loves_tall_mary
	},
	"anna_knows_freddys_secret" : {
		coords : [ location, leads to],
		tooltip : "Anna knows that Freddy is sleeping with Rosie." // relates to freddy_and_anna_mad, freddy_sleeping_with_rosie
	},
	"young_mary_fainting" : {
		coords : [ location, leads to],
		tooltip : "Young Mary has been fainting a lot."
	},
	"anne_addicted_to_laudanum" : {
		coords : [ location, leads to],
		tooltip : "Anne is addicted to laudanum."
	},
	"anne_knows_charles_is_nephew" : {
		coords : [ location, leads to],
		tooltip : "Anne knows Charles is her brother's son." // related to charles_is_johns_son
	},
	"rosie_daughter_alice_and_ned" : {
		coords : [ location, leads to],
		tooltip : "Rosie is the natural daughter of Ned Weatherby and Alice Blackwood."
	},
	"rosie_lazy" : {
		coords : [ location, leads to],
		tooltip : "Rosie's laziness goes unpunished by her parents." // related to rosie_daughter_alice_and_ned
	},
	"drawing_room_not_cleaned" : {
		coords : [ location, leads to],
		tooltip : "The Drawing Room has not been cleaned properly." // relates to rosie_lazy
	}
}
