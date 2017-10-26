var images = document.getElementsByClassName("main");
var show = false;

setInterval(function(){
	if(show){
		images.display = "white";
	} else {
		body.style.background = "#3498db";
	}
	isBlue = !isBlue;
}, 1000)