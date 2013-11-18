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
new SK.Place(
{
 id: 1,
 name: 'Přepážka',
 isActive: true,
 manager: " Obsluhuje knihovník za pultem, vypůjčují a vrací se zde knihy ",
 isDigital: false
}),
new SK.Place(
{
 id: 2,
 name: 'E-mail',
 isActive: true,
 manager: " Slouží k prodloužení registrace a jako schránka důvěry ",
 isDigital: true
}),
new SK.Place(
{
 id: 3,
 name: 'Telefon',
 isActive: true,
 manager: " Obsluhuje knihovník za pultem, odpovídá na dotazy čtenářů o otevírací době, akcích a jiné ",
 isDigital: true
}),
new SK.Place(
{
 id: 4,
 name: 'Knihovník',
 isActive: true,
 manager: " Prochází v knihovně, pořádá knihy je nápomocný čtenářům v nesnázích ",
 isDigital: false
}),
new SK.Place(
{
 id: 5,
 name: 'Mobilní aplikace',
 isActive: true,
 manager: " Prezentuje knihovnu, ukazuje fond a umožňuje rezervace ",
 isDigital: true
}),
new SK.Place(
{
 id: 6,
 name: 'Fb stránky',
 isActive: true,
 manager: " Ukazuje akce knihovny, co se chystá a nové nákupy knih ",
 isDigital: true
}),
new SK.Place(
{
 id: 7,
 name: 'Internetové stránky',
 isActive: false,
 manager: " Prezentuje knihovnu, ukazuje fond a umožňuje rezervace ",
 isDigital: true
}),
new SK.Place(
{
 id: 8,
 name: 'Výloha',
isActive: false,
 manager: " Prezentuje knihovnu, ukazuje nové knihy ve fondu",
 isDigital: false
}),
new SK.Place(
{
 id: 9,
 name: ' Nástěnka ',
isActive: false,
 manager: " umístěna na nějakém viditelném místě vně i mimo knihovnu, ukazuje všechyn akce atd..",
 isDigital: false
}),
new SK.Place(
{
 id: 10,
 name: ' Bibliobox ',
isActive: false,
 manager: " Umísťen na frekventovaném místě, na kterém se vyskytují naši zákazníci, slouží k odevzdávání knih",
 isDigital: false
}),
new SK.Place(
{
 id: 11,
 name: ' Letáky ',
isActive: false,
 manager: " Položeny na nějakém viditelném místě vně i mimo knihovnu, slouží k nalákaní na novinky v knihovně",
 isDigital: false
}),
new SK.Place(
{
 id: 12,
 name: ' lístky s potvrzením výpůjček ',
isActive: false,
 manager: "oznámení o výpujčení, spozdné, kontaktní informace a jiné ",
 isDigital: false
}),
new SK.Place(
{
 id: 13,
 name: ' automaticky generované e-maily ',
isActive: false,
 manager: " oznámení o výpujčení , měsíčník s novinkami atd...",
 isDigital: true
})
]