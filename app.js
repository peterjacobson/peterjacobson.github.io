//Problem: Navigation not interactive
//Solution: Make navigation beautiful using jQuery for sliding menu bars etc

var $navButton = $('.foobar');

//On nav-button click slide out primary menu with animation

$navButton.click(function() {

  console.log("nav but clicked");
  var $mainMenu = $('nav');
  console.log($mainMenu);

  if ($mainMenu.css("height") != "0") {
    console.log('show nav');
    height = "0";
  } else {
    console.log('hide nav');
    height = "initial";
  };

  $mainMenu.css('height', height);
  // $mainMenu.animate({
  //   "height": height
  // }, {
  //   duration: 400,
  //   specialEasing: {
  //     "height": "easeOutCubic"
  //   }
  // });
});

// On click to header or away from nav, hide nav

//On portfolio click expand collapsed sub-menu
