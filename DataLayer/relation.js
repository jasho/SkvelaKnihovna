(function(w) {
	// Namespace ensuring
	if (!w.SK) {
		w.SK = {};
	}

	var sk = w.SK;

	function Relation(relation){
		sk.Serializable(this);

		this.personaId = relation.personaId;
		this.placeId = relation.placeId;
		this.personaName = relation.personaName;
		this.placeName = relation.placeName;
		this.name = relation.name;
		this.services = relation.services;
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
	personaName: 'Alenka',
	placeName: 'Přepážka',
	name: "Vrácení knihy",
	// Persona wants at the place
	services: [{name: "Knihovník", reason: "Je velmi dobré mít knihovníka za pultem, spoustu lidí to potěší a ocení!", isChecked: false},
			   {name: "Lístek s potvrzením výpůjčky", reason: "Je velmi dobré vydávat a na něm informovat o možnostech prodloužení a dokdy knihu vrátit", isChecked: false},
			   {name: "Propisky", reason: "lidé ocení možnost vzít si propisku s logem Vaší knihovny jež jim bude Vás připomínat", isChecked: false},
			   {name: "Vizitku", reason: "s kontaktními informacemi o Vaší pobočce", isChecked: false},
			   {name: "Free Wi-Fi", reason: "Poskytuje možnost všem lidem se připojit na internet i pomocí svého notebooku či mobilu a zpříjemní jim pobyt ve Vaší knihovně", isChecked: false}]
}),
new SK.Relation(
{
 personaId: 1,
 placeId: 7,
 personaName: 'Alenka',
 placeName: 'Internetovéstránky',
 name: "Prohlížení dětských knížek",
 services: [{name: "Kategorie dětských knížek", reason: "O to má Váš malý čtenář největší zájem", isChecked: false},
 			{name: "Vyhledávání", reason: "Aby si najít svojí oblíbenou knihu kterou hledá.", isChecked: false},
 			{name: "Detail knihy", reason: "Detail knihy umožňuje si zjistit o daném svazku více", isChecked: false},
 			{name: "Obrázek", reason: "Ten je přeci pro nejmenší nejdůležitější!", isChecked: false}]
}),
new SK.Relation(
{
 personaId: 3,
 placeId: 1,
 personaName: 'Zuzana',
 placeName: 'Přepážka',
 name: "Vrácení knihy",
 services: [{name: "Příjemná obsluha", reason: "Příjemný usměvavý knihovník či knihovnice vždy zlepší den každému čtenáři", isChecked: false},
 			{name: "Informace o spozdném", reason: "Aby Vaši čtenáři věděli přesně kolik dluží na spozdném.", isChecked: false}]
}),
new SK.Relation(
{
 personaId: 3,
 placeId: 7,
 personaName: 'Zuzana',
 placeName: 'Internetovéstránky',
 name: "Hledání otevírací doby",
 services: [{name: "Viditelná otevírací doba", reason: "Je velmi důležitá, zvlášť pro vytížené čtenáře Vaší knihovny, kteří se k Vám chtějí zastavit i v pozdějších hodinách.", isChecked: false},
 			{name: "Telefon", reason: "Pro možnost se okamžitě spojit se svým knihovníkem!", isChecked: false},
 			{name: "E-mail", reason: "Je fajn možnost pro komplikovanější problémy, které nejsou neodkladné!", isChecked: false},
 			{name: "přehledné stránky", reason: "přehlednost Vašich stránek by měla být na prvním místě.", isChecked: false}]
})
]

var selectedRelations = [relations[0]];

function getServices(personaName, placeName)
{
	for(var i = 0; i < relations.length; i++) {
		var relation = relations[i];

		if(relation.personaName == personaName && relation.placeName == placeName)
		{
			return relation.services;
		}
	}
}

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