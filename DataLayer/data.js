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

	function Persona(persona) {
		Serializable.call(this);
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

	Persona.prototype = new Serializable();
	Persona.prototype.constructor = Persona;
	Persona.prototype.GetName = function() {
		return this.name;
	}

	function Place(){
		Serializable.call(this);
		this.name = '';

	}

	Place.prototype = new Serializable();
	Place.prototype.constructor = Place;


	sk.Persona = Persona;
	sk.Serializable = Serializable;
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