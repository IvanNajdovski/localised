var myIndex = 0;
var myIndexTwo = 0;


function carousel() {
    var i;
    var j;
    var x = document.getElementsByClassName("mySlides");
    var y = document.getElementsByClassName("miniSlides");
    var text = document.getElementsByClassName("list-item-contry");
    var list = document.getElementsByClassName("header-");

    ////STYLING THE LOADING LIST ITEMS
    for(j=0; j < list.length; j++){
        if(list[j].classList.contains("other-list-item")){
            list[j].classList.remove("other-list-item");
        }
     }
    myIndexTwo++;
    if(myIndexTwo > list.length + 1){myIndexTwo=1}
    if(myIndexTwo > 3){
    }else {
        list[myIndexTwo - 1].classList.add("other-list-item");
    }

    ////STYLING THE IMAGES THE MINI IMAGES AND THE LIST ITEMS NAMES
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
        text[i].style.color = "#969497";




    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    x[myIndex-1].style.backgroundImage = `url("../img/banner_${myIndex}.jpg")`;
    y[myIndex-1].style.display = "block";
    text[myIndex-1].style.color = "red";
    //list[myIndex-1].classList.add("other-list-item");
    //list[myIndex-2].classList.remove("other-list-item");
    setTimeout(carousel, 4000); // Change image every 4 seconds


}
carousel();

