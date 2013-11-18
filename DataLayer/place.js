(function(w) {
	// Namespace ensuring
	if (!w.SK) {
		w.SK = {};
	}

	var sk = w.SK;

	function Place(place) {
		sk.Serializable.call(this);

		this.id = place.id;
		this.name = place.name;
		this.isActive = place.isActive;
		this.manager = place.manager;
		this.isDigital = place.isDigital;

		this.relations = [];
	}

	Place.prototype = new sk.Serializable();
	Place.prototype.constructor = Place;

	sk.Place = Place;
})(window);

var places =
[
]