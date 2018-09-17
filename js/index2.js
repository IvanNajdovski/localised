

//SCROLING FUNCTION
function isScrolledIntoView(a) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = a.offset().top;
    var elemBottom = elemTop + a.outerHeight();

    if (elemBottom > docViewTop && elemTop < docViewBottom) {
        a.addClass("btn-animate");
    } else {
        a.removeClass("btn-animate");
    }
};

//TIME FUNCTION CLOCK SECTION
var timeClock = function setTime(){
    let time = new Date($.now());

    let hours = time.getHours();
    let hoursLondon = hours - 1
    let hoursNewYork = hours - 6
    let hoursHongKong = hours - 6
    let hoursBucharest = hours + 1
    let hoursSidnay = hours - 4
    //console.log(hours);
    let minutes = time.getMinutes();
    //console.log(minutes);
    let hourDeg = (hours * 30)
    let minuteDeg =(minutes * 6)
    //console.log(hourDeg)
    $(".hour").css("transform",`rotate(${hours*30}deg)`);
    $(".londonHour").css("transform",`rotate(${hoursLondon*30}deg)`);
    $(".newyorkHour").css("transform",`rotate(${hoursNewYork*30}deg)`);
    $(".hongkongHour").css("transform",`rotate(${hoursHongKong*30}deg)`);
    $(".bucharestHour").css("transform",`rotate(${hoursBucharest*30}deg)`);
    $(".sidneyHour").css("transform",`rotate(${hoursSidnay*30}deg)`);

    $(".minute").css("transform",`rotate(${minuteDeg}deg)`);
};

$("document").ready( function () {

     $(window).scroll( function(){
     if($(window).scrollTop()>0){
         $(".nav").css("background-color","#fff");
         $(".nav").css("position","fixed");
         $(".img__logo").attr("src","img/logo_black.svg");
         $(".list__item").css("color","black");
     }else{
         $(".nav").css("background-color","transparent");
         $(".nav").css("position","absolute");
         $(".img__logo").attr("src","img/logo_white.svg");
         $(".list__item").css("color","#fff");

     }
    });


     $(".service__content-box").mouseout(function(){
         $(this).children("h1").css("color","#272727");
         $(this).children("p").css("color","#272727");
     });
     $(".service__content-box").hover( function(){
         $(this).parent("div").css("background-image",`url("../img/background_item${index + 1}.jpg")`)
     });
     $(document).on("mouseover",".content-box", function(){
         $(this).children("div").children("h1").css("color","#272727");
         $(this).children("div").children("p").css("color","#272727");
         $(this).on("mouseleave",function(){
             $(this).css("background-image","linear-gradient(#fff,#fff)");
             $(this).children("div").children("p").css("color","#fff");
             $(this).children("div").children("img").css("visibility","hidden");
         });

         var elem = $(this)
         var index = elem.index();
         $(this).css("background-image",`url("../img/background_item${index + 1}.jpg")`);
         $(this).children("div").children("img").css("visibility","visible");

     });
//Tablet FUNCTIONALITY
    let counter = 0
     let slider = 80;
     $(".arrow__down").on("click", function(e) {
         e.preventDefault()
         slider = slider + 80;
         if($(".tablet__inner-pic").attr("src") === "img/tablet_up&down.jpg") {
             if (slider < 1900) {
                 $(".tablet__inner-pic").css("transform", `translateY(-${slider}px)`);
                   }

         }else{
             if(slider < 650){
                 $(".tablet__inner-pic").css("transform", `translateY(-${slider}px)`);
             }
         }
     });
     $(".arrow__up").on("click", function(e) {
         e.preventDefault()
         slider = slider - 80;
         if (slider > 0) {
             $(".tablet__inner-pic").css("transform", `translateY(-${slider}px)`);
         }
     });
//CHANGE THE PIC
         $(".btn_swap").on("click",function(e){
             $(".sudo-end").addClass("sudo-start");
             if(!$(this).hasClass("active")) {
                 $(".btn_swap").toggleClass("active");
             }
             if($(".btn_swap1").hasClass("active")){
                 $(".tablet__inner-pic").attr("src","img/tablet_up&down.jpg")
                 $(".tablet__inner-pic").css("transform", `translateY(0px)`);
                 slider = 80;
             }else{
                 $(".tablet__inner-pic").attr("src","img/tablet_up&down2.jpg")
                 $(".tablet__inner-pic").css("transform", `translateY(0px)`);
                 slider = 80;
             }
         })


///CLOCK FUNCTIONALITY

    timeClock();
     //setTime()
        setInterval(timeClock,20000);

////SCROLING FUNCTION


    $(window).on("resize scroll", function () {
        isScrolledIntoView($(".button"));
        isScrolledIntoView($(".buttonOne"));
        isScrolledIntoView($(".buttonTwo"));
        isScrolledIntoView($(".textOne"));
        isScrolledIntoView($(".textTwo"));
        isScrolledIntoView($(".textThree"));
        isScrolledIntoView($(".textListOne"));
        isScrolledIntoView($(".textListTwo"));
        isScrolledIntoView($(".textListThree"));
        isScrolledIntoView($(".textListFour"));
        isScrolledIntoView($(".tabletItemOne"));
        isScrolledIntoView($(".tabletItemTwo"));
        isScrolledIntoView($(".tabletItemThree"));
        isScrolledIntoView($(".tabletItemFour"));
        isScrolledIntoView($(".itemOne"));
        isScrolledIntoView($(".itemTwo"));


       })


 });