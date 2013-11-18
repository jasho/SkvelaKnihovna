(function(w) {
	// Namespace ensuring
	if (!w.SK) {
		w.SK = {};
	}

	var sk = w.SK;

	function Suggestion{
		this.name = '';
		this.isChecked = false;		
	}

	function Relation(relation){
		sk.Serializable(this);

		this.personaId = relation.personaId;
		this.placeId = relation.placeId;
		this.name = relation.name;
		this.suggestions = relation.suggestions;
	}

	Relation.prototype = new sk.Serializable();
	Relation.prototype.constructor = Relation;

	sk.Relation = Relation;
})(window);

var relations =
[
new SK.Relation(
{
	personaId: 1,
	placeId: 1,
	name: "Vrácení knihy",
	suggestions: [{name: "WiFi", reason: "Cos it's fucking awesome", isChecked: false}, {name: "Příjemná obsluha", reason: "Jsou blbi!", isChecked: false}]
}),
]