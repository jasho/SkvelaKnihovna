$(document).ready(function(){
	$("#main-content").load( "typ-knihovny.html" , function(){
			RegisterGetPage();
		});

	GetPage("cesta-sluzbou");
	GetPage("kontaktni-mista");
	GetPage("persony");
	GetPage("typ-knihovny");


});

function RegisterGetPage(){
 	GetPage("cesta-sluzbou-async");
	GetPage("kontaktni-mista-async");
	GetPage("persony-async");
	GetPage("typ-knihovny-async");
}


function GetPage(elem){
	$("." + elem).click(function(event){ 
		event.preventDefault();
		$("nav li").removeClass("active");
		$("." + elem.replace("-async", "")).addClass("active");
		$("#main-content").load(elem.replace("-async", "") + ".html", function(){
			RegisterGetPage();
		});
	});
}

function ViewPersonas(){
	for(var i = 0; i < personas.length; i++){
		$("#personas-list").append('<li><div class="panel panel-personas panel-default kontaktni-mista-async" id="' + personas[i].name + '"><div class="panel-heading"><div class="photo" style="background-image: url(' + personas[i].photoUrl + ')"></div><strong>' + personas[i].name + '</strong></div><div class="panel-body"><strong>Věk:</strong> ' + personas[i].age + '<br /><strong>Vzdělání:</strong> ' + personas[i].education + '<br /><strong>Návyky:</strong> ' + personas[i].habits + '<br /><strong>Zvládnutí technologií:</strong> ' + personas[i].technologies + '<br /><strong>Koníčky:</strong> ' + personas[i].hobbies + '</div></div></li>');
	}
}

function ViewPlaces(){
	for(var i = 0; i < places.length; i++){
		$("#places-list").append('<li><div class="panel panel-place panel-default cesta-sluzbou-async" id="' + places[i].name + '"><div class="panel-heading"><div class="photo" style="background-image: url(' + places[i].photoUrl + ')"></div>' + places[i].name + '</div><div class="panel-body">' + places[i].manager + '</div></div></li>');
	}
}

function ResultPersona(){
    for(var i = 0; i < personas.length; i++){
        if(chosenPersona == personas[i].name.replace(" ", "")){
        	$("#result-person").append('<div class="panel panel-personas panel-default kontaktni-mista-async" id="' + personas[i].name + '"><div class="panel-heading"><div class="photo" style="background-image: url(' + personas[i].photoUrl + ')"></div><strong>' + personas[i].name + '</strong></div><div class="panel-body"><strong>Věk:</strong> ' + personas[i].age + '<br /><strong>Vzdělání:</strong> ' + personas[i].education + '<br /><strong>Návyky:</strong> ' + personas[i].habits + '<br /><strong>Zvládnutí technologií:</strong> ' + personas[i].technologies + '<br /><strong>Koníčky:</strong> ' + personas[i].hobbies + '</div></div>');
		}
	}
}

function ResultPlace(){
    for(var i = 0; i < places.length; i++){
        if(chosenPlace == places[i].name.replace(" ", "")){
        	$("#result-place").append('<div class="panel panel-place panel-default cesta-sluzbou-async" id="' + places[i].name + '"><div class="panel-heading"><div class="photo" style="background-image: url(' + places[i].photoUrl + ')"></div>' + places[i].name + '</div><div class="panel-body">' + places[i].manager + '</div></div>');
		}
	}
}

