

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

    $(window).on('resize', function(){
        if($(this).width() > 800){
            $(".checkbox__input").prop("checked", false)
        }
    });

    $(window).scroll( function(){
        if($(window).scrollTop()>0){
            $(".nav").css("background-color","#fff");
            $(".nav").css("position","fixed");
            $(".nav").addClass("active");
            $(".checkbox__label").addClass("active")
            $(".img__logo").attr("src","img/logo_black.svg");
            $(".list__item").css("color","black");
            if($(window).scrollTop()>$(window).height()){
                $(".nav").addClass("shadow");
            }else{

                $(".nav").removeClass("shadow");
            }
        }else{
            $(".nav").css("background-color","transparent");
            $(".nav").css("position","absolute");
            $(".img__logo").attr("src","img/logo_white.svg");
            $(".list__item").css("color","#fff");
            $(".checkbox__label").removeClass("active")

        }
    });

///CLOCK FUNCTIONALITY

    timeClock();
    //setTime()
    setInterval(timeClock,20000);

////SCROLING FUNCTION

    $(".careersHeader").addClass("animate")
    $(window).on("resize scroll", function () {

        isScrolledIntoView($(".careersOne"));
        isScrolledIntoView($(".careersTwo"));
        isScrolledIntoView($(".careersThree"));


    });




});