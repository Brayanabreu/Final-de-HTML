//activa el menu responsive
function myFunction() {
    var x = document.getElementById("mimenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
//despliega el menu responsive
$(document).ready(function(){
	$(".icon").click(function(){
		myFunction();
	});
	var myIndex = 0;
	carousel();
//la funcion carrucel tiene un contador, y cada 5 segundos el cambia la imagen
	function carousel() {
	    var i;
	    var x = document.getElementsByClassName("mySlides");
	    for (i = 0; i < x.length; i++) {
	       x[i].style.display = "none";  
	    }
	    myIndex++;
	    if (myIndex > x.length) {myIndex = 1}    
	    x[myIndex-1].style.display = "block";  
	    setTimeout(carousel, 5000); // cambia las imagenes cada 5 segundos
	}

});

