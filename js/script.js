// fullPage.js initialize
$(document).ready(function(){  
    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally: true,
        navigationPosition: 'right',
        scrollBar: true,
        css3: true,
        navigationTooltips: ['Home', 'Skills', 'Projects', 'About'],
        //sectionsColor: ['#ccc','#fff', '#fff', '#fff', '#fff'],
        licenseKey: null,
        anchors:['Home', 'Skills', 'Projects', 'Contacts'],
        keyboardScrolling: true,
    });

    $.fn.fullpage.setAllowScrolling(false);

    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          }
      });
      
      var swiper = new Swiper('.swiper-container-2', {
        effect: 'coverflow',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          }
      });
});

