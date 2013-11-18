(function(w) {
	// Namespace ensuring
	if (!w.SK) {
		w.SK = {};
	}

	var sk = w.SK;

	function Place(place) {
		sk.Serializable.call(this);

		this.photoUrl = place.photoUrl;
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
 photoUrl: 'DataLayer/photos/places/1.jpg',
 isActive: true,
 manager: " Obsluhuje knihovník za pultem, vypůjčují a vrací se zde knihy ",
 isDigital: false
}),
new SK.Place(
{
 id: 2,
 name: 'E-mail',
 photoUrl: 'DataLayer/photos/places/2.jpg',
 isActive: true,
 manager: " Slouží k prodloužení registrace a jako schránka důvěry ",
 isDigital: true
}),
new SK.Place(
{
 id: 3,
 name: 'Telefon',
 photoUrl: 'DataLayer/photos/places/3.jpg',
 isActive: true,
 manager: " Obsluhuje knihovník za pultem, odpovídá na dotazy čtenářů o otevírací době, akcích a jiné ",
 isDigital: true
}),
new SK.Place(
{
 id: 4,
 name: 'Knihovník',
 photoUrl: 'DataLayer/photos/places/4.jpg',
 isActive: true,
 manager: " Prochází v knihovně, pořádá knihy je nápomocný čtenářům v nesnázích ",
 isDigital: false
}),
new SK.Place(
{
 id: 5,
 name: 'Mobilní aplikace',
 photoUrl: 'DataLayer/photos/places/5.jpg',
 isActive: true,
 manager: " Prezentuje knihovnu, ukazuje fond a umožňuje rezervace ",
 isDigital: true
}),
new SK.Place(
{
 id: 6,
 name: 'Fb stránky',
 photoUrl: 'DataLayer/photos/places/6.jpg',
 isActive: true,
 manager: " Ukazuje akce knihovny, co se chystá a nové nákupy knih ",
 isDigital: true
}),
new SK.Place(
{
 id: 7,
 name: 'Internetové stránky',
 photoUrl: 'DataLayer/photos/places/7.jpg',
 isActive: false,
 manager: " Prezentuje knihovnu, ukazuje fond a umožňuje rezervace ",
 isDigital: true
}),
new SK.Place(
{
 id: 8,
 name: 'Výloha',
 photoUrl: 'DataLayer/photos/places/8.jpg',
isActive: false,
 manager: " Prezentuje knihovnu, ukazuje nové knihy ve fondu",
 isDigital: false
}),
new SK.Place(
{
 id: 9,
 name: ' Nástěnka ',
 photoUrl: 'DataLayer/photos/places/9.jpg',
isActive: false,
 manager: " umístěna na nějakém viditelném místě vně i mimo knihovnu, ukazuje všechyn akce atd..",
 isDigital: false
}),
new SK.Place(
{
 id: 10,
 name: ' Bibliobox ',
 photoUrl: 'DataLayer/photos/places/10.jpg',
isActive: false,
 manager: " Umísťen na frekventovaném místě, na kterém se vyskytují naši zákazníci, slouží k odevzdávání knih",
 isDigital: false
}),
new SK.Place(
{
 id: 11,
 name: ' Letáky ',
 photoUrl: 'DataLayer/photos/places/11.jpg',
isActive: false,
 manager: " Položeny na nějakém viditelném místě vně i mimo knihovnu, slouží k nalákaní na novinky v knihovně",
 isDigital: false
}),
new SK.Place(
{
 id: 12,
 name: ' lístky s potvrzením výpůjček ',
 photoUrl: 'DataLayer/photos/places/12.jpg',
isActive: false,
 manager: "oznámení o výpujčení, spozdné, kontaktní informace a jiné ",
 isDigital: false
}),
new SK.Place(
{
 id: 13,
 name: ' automaticky generované e-maily ',
 photoUrl: 'DataLayer/photos/places/13.jpg',
isActive: false,
 manager: " oznámení o výpujčení , měsíčník s novinkami atd...",
 isDigital: true
})
]