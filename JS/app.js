// var x = 0;
// slideShow();

// function slideShow() {
//     var image = document.getElementsByClassName("main-img");
//     for (var i = 0; i < image.length; i++) {
//        image[i].style.display = "none"; 
//     }

//     if (x >= image.length) {x = 0}    
//     image[x].style.display = "inline-block";
//     x ++;
//     setTimeout(slideShow, 2500); 
// } 
// this code was with javascript-- could not figure out how to fade in and out


//this bottom code is with jQuery with fade in and outs
$("#slideshow > div:gt()").css("display", "none");

setInterval(function() {
 $('#slideshow > div:first')
   .fadeOut(1000)
   .next()
   .fadeIn(1000)
   .end()
   .appendTo('#slideshow');
}, 1750);
