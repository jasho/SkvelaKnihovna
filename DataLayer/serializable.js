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
	}

	sk.Serializable = Serializable;
	
})(window);
