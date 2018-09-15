var myIndex = 0;


function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var y = document.getElementsByClassName("miniSlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    x[myIndex-1].style.backgroundImage = `url("../img/banner_${myIndex}.jpg")`;
    y[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 4 seconds

}
carousel();

