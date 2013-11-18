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

function SetActive(elem){
	$("." + elem.replace("-async", "")).addClass("active")
}