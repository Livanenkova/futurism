 function FUTURISM(e) {
 	e.preventDefault();
 	let el=document.getElementById("logo")
 	if (el.innerHTML=="FUTURISM"){
 		el.innerHTML="ФУТУРИЗМ"
 	}else{
 		el.innerHTML="FUTURISM"
 	}

 	// body...
 }
 console.log($("#logo"));
$(document).ready (function(){
	$(".button").click(function(e){
		e.preventDefault();
		$(".two").toggleClass("nf");
		change_text();
	})
$("input").keydown(function(){
	change_text();
})

})
function change_text(){
	let t=$("input").val();
		console.log(t)
		if(t!=""){
			$(".sg").text(t);
		}

}

