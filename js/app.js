// MVP ===============================================================

// ANIMATIONS -------------------------------------------------------------

// on window load, animate face slide down to forehead height
$(window).load(function() {
  // $('#peteFace').animate({margin-top: -100%}, 1000)
  $('header').animate({'margin-top': '-50%'}, 1200);
});

// DOCUMENT READY EVENTS
$(function() {
  // on forehead click,
  $('header').one("click", function() {

    // face slides all the way down
    $('header').animate({'margin-top': '0'}, 250);

    // first pete message slides in from left
    $('.message.pete.first').delay(300).animate({'margin-left': '0.3em'}, 800);
    // second pete message slides in from left
    $('.message.pete.second').delay(1400).animate({'margin-left': '0.3em'}, 800);

    $('html, body').delay(2000).animate({scrollTop: $(document).height()-$(window).height()*0.98},1400);

    // first user message slides up from bottom
    $('.message.user.first').delay(2500).animate({'margin-left': '1.4em'}, 800);

    // head clicked again
    $( this ).click(function() {
      // random sample from expressions
      console.log('ow!')
      $('header').animate({'margin-left': '-0.2em'}, 100);
      $('header').animate({'margin-left': '0.2em'}, 100);
      $('header').animate({'margin-left': '0em'}, 100);
    });
  });

  // on click of user message option button

    // ----- scroll down page

    //


  // INTERACTIONS -----------------------------------------------------------

  //Problem: Navigation not interactive
  //Solution: Make navigation beautiful using jQuery for sliding menu bars etc
  // var $navButton = ;
  //On nav-button click slide out primary menu with animation

  // $('#menu-toggle').click({element: 'nav'}, toggleCollapse);
  // $('#portfolio-toggle').click({element: '#portfolio-nav'}, toggleCollapse);
  //
  // function toggleCollapse(event) {
  //   console.log(event.data);
  //   if ($(event.data.element).css("height") === "0px") {
  //     console.log('expand');
  //     $(event.data.element).css('height', 'initial');
  //   } else {
  //     console.log('collapse');
  //     $(event.data.element).css('height', "0px");
  //   }
  // }

  // On click to header or away from nav, hide nav
  //On portfolio click expand collapsed sub-menu
});



// ADDITIONAL FEATURES ======================================================

// on another face click

  // message pop in above head - "ow, stop poking me"
