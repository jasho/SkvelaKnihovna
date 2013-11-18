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

		this.relations = [];
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
 city: 'Město',
 education: 'studuje ZŠ',
 social: 'dítě, premiantka',
 habits: 'Chodí do školní jídelny, a jednou za 14 dní jde do knihovny pro knížky a na internet',
 technologies: 'umí zapnout počítač, hraje na něm hry a hledá informace o zpěvácích na blogísku ',
 hobbies: 'čtení, jízda na koni',
 others: ''
}),
new SK.Persona(
{
 id: 2,
 age: 21,
 name: 'Marek',
 photoUrl: '',
 city: 'Kolej',
 education: '',
 social: 'Chytrolín, cestovatel',
 habits: 'Na přednášky pěšky, v knihovně  tráví volný čas mezi přednáškami',
 technologies: 'Používá počítač na velmi dobré uživatelské úrovni, má chytrý mobil',
 hobbies: 'Cestování, šachy',
 others: ''
}),
new SK.Persona(
{
 id: 3,
 age: 37,
 name: 'Zuzana',
 photoUrl: '',
 city: ' Příměstská oblast – dojíždí, 2x týdně na univerzitu ',
 education: ' VŠ – doktorské ',
 social: ' Bezdětná, úspěšná, ambiciózní ',
 habits: 'Před prací si kupuje zdravé jídlo do práce,  ráda odpočívá v knihovně (měkké polštáře)',
 technologies: ' Umí s počítačem, ale někdy s ním bojuje, má normální telefon – nechce být pořád k zastižení ',
 hobbies: ' Příroda, výlety, dovolená u moře',
 others: ''
}),
new SK.Persona(
{
 id: 4,
 age: 30,
 name: 'Ladislava',
 photoUrl: '',
 city: 'Vesnice ',
 education: 'SŠ ',
 social: ' Na mateřské, vdaná, starostlivá ',
 habits: ' Chodí půjčovat knihy pro dítě, aby ušetřila',

 technologies: ' S počítačem umí dostatečně, hledá na něm recepty, tráví čas na FB ',
 hobbies: ' Moderní romány, dětské knihy ',
 others: ''
}),
new SK.Persona(
{
 id: 5,
 age: 68,
 name: 'Petr',
 photoUrl: '',
 city: ' Městys ',
 education: 'ZŠ ',
 social: ' Odpočinkový, ženatý ',
 habits: ' Rád krmí holuby, pravidelné procházky parkem, v létě tráví venku hodně času ',
 technologies: ' Počítač doma nemá, nepotřebuje ho ',
 hobbies: ' Chata, vyrábí ze dřeva, příroda ',
 others: ''
}),
new SK.Persona(
{
 id: 6,
 age: 47,
 name: 'Karel',
 photoUrl: '',
 city: 'Město ',
 education: 'VŠ ',
 social: 'Ženatý, pokrokový',
 habits: ' Do knihovny chodí pro inspiraci ',
 technologies: ' S počítačem je v každodenním styku, má chytrý mobil ',
 hobbies: ' Bastlí si doma elektrotechnické hračky, je to kutil ',
 others: ''
}),
new SK.Persona(
{
 id: 7,
 age: 55,
 name: 'Hynek',
 photoUrl: '',
 city: ' Příměstská oblast – do práce to má hodinu ',
 education: 'SŠ ',
 social: 'Ženatý, má odrostlé děti ',
 habits: ' Nemá moc času, do knihovny chodí ve večerních hodinách, čte si ve vlaku ',
 technologies: ' Počítač má, užívá jen omezeně – mail, zprávy, někdy nákup, hledá informace na internetu ',
 hobbies: ' Historické romány, společenské tance ',
 others: ''
})
];