var x = 0;
slideShow();

function slideShow() {
    var image = document.getElementsByClassName("main-img");
    for (var i = 0; i < image.length; i++) {
       image[i].style.display = "none"; 
       image[i].style.transition = "all 0.3s"
    }

    if (x >= image.length) {x = 0}    
    image[x].style.display = "inline-block";
    image[i].style.transition = "all 0.3s"
    x ++;
    setTimeout(slideShow, 2500); 
}
