(function($){
  "use strict";
  
  $(window).bind("scroll",function(){
    if($(window).scrollTop() > 300){
      $("nav.nav").addClass("nav-active");
    } else {
      $("nav.nav").removeClass("nav-active");
    }
  });
  
  $(window).bind("DOMContentLoaded", function(){
    // Load all element
    setTimeout(() => {
      $("div.loading-box .loading").css("opacity","0");
      setTimeout(() => {
        $("div.loading-box").animate({
          "opacity":"0"
        }, 1000);
        AOS.init({ once: true });
      });
    }, 1500);
  });
  
  $("nav.nav .nav-btn").bind("click", function(){
    $("nav.nav .nav-bar").toggleClass("nav-bar-active");
  });
  $("nav.nav .nav-bar li").bind("click", function(){
    $("nav.nav .nav-bar").removeClass("nav-bar-active");
  });
  
  // Form Contact
  $("button#submit").bind("click", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value,
      msg = document.getElementById("message").value;
      
    window.location.href = `https://wa.me/6285240082873?text=Halo nama saya ${name}; ${msg}`;
  });
  
  $("#navigation").scrollspy({ offset: -70 });

  
})(jQuery);
