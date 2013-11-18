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
	// Persona wants at the place
	services: [{name: "WiFi", reason: "Cos it's fucking awesome", isChecked: false}, {name: "Příjemná obsluha", reason: "Jsou blbi!", isChecked: false}]
}),
]

var selectedRelations = [relations[0]];

var getUnselectedServicesForPlace = function(placeId) {
	var unselectedServices = [];

	for(var i = 0; i < selectedRelations.length; i++) {
		var selectedRelation = selectedRelations[i];

		for (var j = 0; j < selectedRelation.services.length; j++) {
			var selectedService = selectedRelation.services[j];

			if (!selectedService.isChecked && unselectedServices.indexOf(selectedService) == -1) {
				unselectedServices.push(selectedService);
			}
		}
	}

	return unselectedServices;
}