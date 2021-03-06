// MVP ===============================================================
function slideInMessage(messageID, delayT, speed) {
  delayT = typeof delayT !== 'undefined' ? delayT : 0;
  speed = typeof speed !== 'undefined' ? speed : 600;
  var message = $(messageID)
  if (message.hasClass('user')) {
    var Lmargin = '1.4em';
  } else if (message.hasClass('pete')) {
    var Lmargin = '0.3em';
  }
  message.show()//css('display', 'block');
  message.delay(delayT).animate({'margin-left': Lmargin}, speed);
}
// ANIMATIONS -------------------------------------------------------------

// on window load, animate face slide down to forehead height
$(window).load(function() {
  $('.message').hide();
  $('header').css('margin-top', '-100%');
  $('html, body').animate({
        scrollTop: $("#page-top").offset().top
    }, 0);
  $('header').animate({'margin-top': '-50%'}, 1200);
});

// DOCUMENT READY EVENTS
$(function() {
  // on forehead click,
  $('#peteFace').one("click", function() {

    // face slides all the way down
    $('header').animate({'margin-top': '0'}, 250);

    // first pete message slides in from left behind the head, then down to it's final position
    slideInMessage('#hi',0,0);
    $('#hi').delay(300).animate({'margin-top': '0'}, 800);
    // second pete message slides in from left
    slideInMessage('#welcome', 1400)

    $('html, body').delay(2000).animate({scrollTop: $('#menu').offset()},1400);

    // inflate page-bottom div to lift the input field above the keypad
    $('#page-bottom').delay(2000).css('display', 'block').css('height', '10em');
    $('html, body').delay(0).animate({scrollTop: $(document).height()},1400);
    // first user message slides in from right
    slideInMessage('#menu', 2400);
    // focus on user name textbox
    setTimeout(function() {
      $('#user-name-input').focus();
    }, 3700);

    // head clicked again
    $( this ).click(function() {
      // random sample from expressions
      console.log('ow!')
      $('header').animate({'margin-left': '0.4em'}, 100);
      $('header').animate({'margin-left': '0em'}, 100);
    });
  });

  // hit enter in name text area
  $('#user-name-input').keypress(function (e) {
    var key = e.which;
    if(key == 13) { // enter key code
      var username = $('#user-name-input').val();
      userMessage = 'Ah, '+username+'! Sorry, you were saying?';
      $('#hi-name p').html(userMessage);
      slideInMessage('#hi-name', 0, 400);
      $('#hi-name').focus();
      $('#menu-items').appendTo('#detached-menu');
      $('#user-name-input').css('margin-bottom', 0);
      slideInMessage('#detached-menu', 400);
    }
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
