

//SCROLING FUNCTION
function isScrolledIntoView(a) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = a.offset().top;
    var elemBottom = elemTop + a.outerHeight();


    if (elemBottom > docViewTop && elemTop < docViewBottom) {
        a.addClass("btn-animate");
    }else {
        if(a.hasClass("about__text__line" || "about__text__pin")){

        }else {
            a.removeClass("btn-animate");
        }
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
            $(".nav").addClass("active");
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

        }
    });

///CLOCK FUNCTIONALITY

    timeClock();
    //setTime()
    setInterval(timeClock,20000);

////SCROLING FUNCTION

    $(".careersHeader").addClass("animate")
    $(window).on("resize scroll", function () {


        isScrolledIntoView($(".textOne"));
        isScrolledIntoView($(".buttonOne"));
        isScrolledIntoView($(".buttonTwo"));
        isScrolledIntoView($(".about__text__line"));
        isScrolledIntoView($(".about__text__pin"));
        isScrolledIntoView($(".about-header"));
        isScrolledIntoView($(".about__text"));



    });
    $(".text-collapse").click(function(){

        if($(this).hasClass("active")){
            $(this).removeClass("active")
            $(this).parent("div").removeClass("active");
            $(this).parent("div").css("height", "80px");
            $(this).children("img").attr("src",`img/plus.png`);

        }else{
            let collapse = $(this).parents(".value__content-list").children(".value__content-list-box");
            console.log(collapse)
            for(var i = 0; i < collapse.length; i++){
                if($(collapse[i]).hasClass("active")){
                    $(collapse[i]).removeClass("active");
                    $(collapse[i]).css("height", "80px");
                    $(collapse[i]).children("h3").children("img").attr("src","img/plus.png");
                }
            }
            $(this).addClass("active")
            $(this).parent("div").addClass("active");
            $(this).children("img").attr("src",`img/minus.png`);

            var height = $(this).parent("div").children("p").outerHeight() + $(this).outerHeight()
            console.log(height)

            $(this).parent("div").css("height", `${height}px`);

        };
    });

    $(".about__link").on("click", function(e){
        if(this.hash !==""){
            e.preventDefault()
            var hash = this.hash
            console.log($(hash).offset().top)
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },1000,function(){
                window.location.hash = hash;
            });
        }
    });


});