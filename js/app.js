//Problem: Navigation not interactive
//Solution: Make navigation beautiful using jQuery for sliding menu bars etc

// var $navButton = ;

//On nav-button click slide out primary menu with animation

$('#menu-toggle').click({element: 'nav'}, toggleCollapse);
$('#portfolio-toggle').click({element: '#portfolio-nav'}, toggleCollapse);



function toggleCollapse(event) {
  console.log(event.data);
  if ($(event.data.element).css("height") === "0px") {
    console.log('expand');
    $(event.data.element).css('height', 'initial');
  } else {
    console.log('collapse');
    $(event.data.element).css('height', "0px");
  }
}

// On click to header or away from nav, hide nav

//On portfolio click expand collapsed sub-menu
