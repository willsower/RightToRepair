$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
});

// Smooth Scroll Reveal Below
overalDelay = 250;

ScrollReveal().reveal('.background', {delay: overalDelay});
ScrollReveal().reveal('.homeInfoName', {delay: overalDelay});
ScrollReveal().reveal('.homeInfoP', {delay: overalDelay});
ScrollReveal().reveal('.members', {delay: overalDelay});
ScrollReveal().reveal('.repairCafe', {delay: overalDelay});
ScrollReveal().reveal('.guides', {delay: overalDelay});
ScrollReveal().reveal('.guideImg', {delay: overalDelay});
ScrollReveal().reveal('.guideChunk', {delay: overalDelay});
ScrollReveal().reveal('.repairCafeChunk', {delay: overalDelay});
ScrollReveal().reveal('.repairCafeImg', {delay: overalDelay});
ScrollReveal().reveal('.communityImg', {delay: overalDelay});
ScrollReveal().reveal('.communityChunk', {delay: overalDelay});
ScrollReveal().reveal('.moreInfo', {delay: overalDelay});
ScrollReveal().reveal('.finalize', {delay: overalDelay});