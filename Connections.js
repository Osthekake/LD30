var Connections = {
	"jane_killed_george" : {
		coords : [0, 0, 3, 1],
		tooltip : "Jane Conway killed George Conway.",
		children : ["anne_has_daughters", "jane_killed_her_father", "anne_is_married_to_george", "jane_and_anne_have_same_last_name"]
	},
	"anne_has_daughters" : {
		coords : [1, 0, 2, 0],
		tooltip: "Anne Conway has three daughters."
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
	}
}
