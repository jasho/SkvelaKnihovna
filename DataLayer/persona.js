(function(w) {
	
	// Namespace ensuring
	if (!w.SK) {
		w.SK = {};
	}

	var sk = w.SK;

	// Constructs persona from the key-value pairs.
	function Persona(persona) {
		sk.Serializable.call(this);

		// Properties
		this.id = persona.id;
		this.name = persona.name;
		this.age = persona.age;
		this.photoUrl = persona.photoUrl;
		this.city = persona.city;
		this.education = '';
		this.social = '';
		this.habits = '';
		this.technologies = '';
		this.hobbies = '';
		this.others = '';
	}

	Persona.prototype = new sk.Serializable();
	Persona.prototype.constructor = Persona;
	Persona.prototype.GetName = function() {
		return this.name;
	}

	// Exports
	sk.Persona = Persona;
})(window);

var personas = 
[
new SK.Persona(
{
	id: 1,
	age: 10,
	name: 'Alenka',
	photoUrl: '',
	city: '',
	education: '',
	social: '',
	habits: '',
	technologies: '',
	hobbies: '',
	others: ''
})
];