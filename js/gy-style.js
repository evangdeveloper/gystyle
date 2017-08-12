function openMenuMobile(obj){
 $(document).ready(function(){
  $(obj).on('click', function(){
   var heigth_navbar = $('.navbar').height();
   var width_navbar = $('.navbar').width();
   $(this).next().delay(1000).toggleClass('navbar-list-open');
   if($('.navbar').hasClass('navbar-complet')){
    $(this).next().css({
     top: heigth_navbar+'px',
     right: 0,
     width: width_navbar + 'px',
   });
   } else {
    $(this).next().css({
     top: heigth_navbar+14+'px',
     width: width_navbar + 'px',
     right: 15+'px',
    });
   }
   
  });
 });
}

function sideNavigation(){
  if($('body').find('nav.navbar')){
    var heigth_navbar = $('.navbar').height();
    var navbar_side   = $('.navbar-side');
    var gycontainer   = $('.gy-container');
    navbar_side.css({
      "width":"60px"
    });
    gycontainer.css({
      "padding-top": heigth_navbar+'px'
    });

    if(gycontainer.hasClass('container-admin')){
      gycontainer.css({"padding-left":"50px"});
    }

    if(navbar_side.hasClass('navbar-side-fixed')){
      navbar_side.css({
        "top": "0",
        
        "padding-top": heigth_navbar + "px"
      });
      $('.navbar').css({
        "position":"fixed",
        "width":"100%",
        "z-index":"999"
      });
    }

    navbar_side.on("mouseenter", function(){
      $(this).css({
        "width":"200px",
        "transition":"width linear .15s"
      });

      $(this).find('.gy-group-nav-item a span').css({"display":"block"});

      gycontainer.css({
        "padding-left":"200px",
        "transition":"padding-left linear .15s"
      });

    }).on( "mouseleave", function(){
      $(this).css({
        "width":"60px",
        "transition":"width linear .15s"
      });

      $(this).find('.gy-group-nav-item a span').css({"display":"none"});

      gycontainer.css({
        "padding-left":"60px",
        "transition":"padding-left linear .15s"
      });
    });
  }
}

$(document).ready(sideNavigation);