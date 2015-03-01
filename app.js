//Problem: Navigation not interactive
//Solution: Make navigation beautiful using jQuery for sliding menu bars etc

var $navButton = $('.foobar');

//On nav-button click slide out primary menu with animation

$navButton.click(function() {

  var $mainMenu = $('header nav');
  var marginTop;
  var initialMargin = $mainMenu.css("margin-top");

  if ($mainMenu.css("margin-top") == initialMargin) {
    console.log('show nav');
    marginTop = "0px";
  } else {
    console.log('hide nav');
    marginTop = initialMargin;
  };

  console.log("nav but clicked");
  $mainMenu.animate({
    "margin-top": marginTop
  }, {
    duration: 400,
    specialEasing: {
      "margin-top": "easeOutCubic"
    }
  });
});

// On click to header or away from nav, hide nav

//On portfolio click expand collapsed sub-menu
