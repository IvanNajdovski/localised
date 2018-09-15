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

        function setTime(){
             var time = new Date($.now());
             console.log(time);
             var hours = time.getHours();
             var hoursLondon = hours - 1
            var hoursNewYork = hours - 1
            var hoursHongKong = hours - 1
            var hoursBucharest = hours - 1
            var hoursSidnay = hours - 1
             console.log(hours);
             var minutes = time.getMinutes();
             console.log(minutes);
             var hourDeg = (hours * 30)
             var minuteDeg =(minutes * 6)
            console.log(hourDeg)
             $(".hour").css("transform",`rotate(${hourDeg}deg)`);
             $(".minute").css("transform",`rotate(${minuteDeg}deg)`);
        }
        setTime()


 });