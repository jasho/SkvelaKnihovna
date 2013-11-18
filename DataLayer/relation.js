(function(w) {
	// Namespace ensuring
	if (!w.SK) {
		w.SK = {};
	}

	var sk = w.SK;

	function Relation(relation){
		sk.Serializable(this);

		this.id = relation.id;
		this.name = relation.name;
		this.action = relation.action;
		this.problem = relation.problem;
		this.solution = relation.solution
	}

	Relation.prototype = new sk.Serializable();
	Relation.prototype.constructor = Relation;

	sk.Relation = Relation;
})(window);