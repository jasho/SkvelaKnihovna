(function(w) {	
	// Namespace ensuring
	if (!w.SK) {
		w.SK = {};
	}

	var sk = w.SK;

	function Serializable(){
		Serializable.prototype.Serialize = function(){
			return JSON.stringify(this);
		}
	}
	
})(window);
