$(document).ready(function(){
	$("#main-content").load( "typ-knihovny.html" );

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
		$("#main-content").load( elem.replace("-async", "") + ".html", function(){
			RegisterGetPage();
		});
	});
}

function ViewPersonas(){
	for(var i = 0; i < personas.length; i++){
		$("#personas-list").append('<li><div class="panel panel-default"><div class="panel-heading">' + personas[i].name + '</div><div class="panel-body">O Frantovi</div></div></li>');
	}
}
