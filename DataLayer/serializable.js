(function(w) {	
	// Namespace ensuring
	if (!w.SK) {
		w.SK = {};
	}

	var sk = w.SK;

	function Serializable(){
		Serializable.prototype.serialize = function(){
			return JSON.stringify(this);
		}

		Serializable.prototype.deserialize = function(serialized){
			return JSON.parse(serialized);
		}
	}

	sk.Serializable = Serializable;
	
})(window);
