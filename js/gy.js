(function( $ ){
  //var config = $.extend({}, options); //Varible de configuración.
  //GMODAL
  $.fn.gmodal = function() {
    var handler = this;

    var calcular = function(src, mod){
      var a = $(src).height();
      var b = $(mod).outerHeight();
      b = parseFloat(b/100);
      return (a - (a*b))/2;
    };

    if($(handler).attr('data-toggle') == 'modal') {

      var pantalla = window;
      var modal   = $(handler).attr('data-target');

      var content = $( modal + ' .gmodal-dialog' );
      var top     = calcular(pantalla, '.gmodal-dialog');


      $(handler).on('click', function(event) {
        event.preventDefault();
        $(modal).fadeIn().css({'display':'flex'});
      });
    }

    var close_modal = function() {
      return $(modal).fadeOut();
    };

    if($(modal + ' .gmodal-content .gmodal-head').find('button.close')){
      var close = $(modal + ' .gmodal-content .gmodal-head button.close');
      close.on('click', function(){
          close_modal();
      });
    }

    if($('.close').attr('data-close')=='modal'){
      $('.close').on('click', close_modal);
    }

    $(window).on('click', function(e){
      e.preventDefault();
    	var eve_tar = $(e.target);
    	if(eve_tar.is(modal)){
    		close_modal();
    	}
    });

    return handler;
  };

  //GSLIDER

  //Function main Slider
  $.fn.gslide = function(slide_config){
    var gslide = this;
    var slide_config = $.extend({}, $.fn.gslide.defaultOptions, slide_config);
    var current_pos = 1;

    if( $(gslide).attr('data-tools') == 'gslide') {
      //Comprovamos que el objeto principal, contena el atributo data-tools
      //Este nos ayudará a identificar, que se usara un slider de gy-style.

      if( $(gslide).attr('data-slide') && $(gslide).attr('data-slide') != "") {
        //Comprovamos que el objeto principal, cotenga el attributo data-slide
        //Este nos ayudará a ideificar el id del objeto que se pasará al aplicar el plugin.
        var id_slider = $(gslide).attr('data-slide');
        var slides_count = $(id_slider + ' .gslide-content .gslide-item').length;

        $(id_slider).append('<div class="gslide-left"><span class="gyicon gy-circle-left"></span></div><div class="gslide-right"><span class="gyicon gy-circle-right"></span></div>');

        if( slide_config.pagination == true) {
          $( gslide ).append('<ol class="gslide-pagination"></ol>');
          if( $( gslide ).find('.gslide-pagination') ) {
            for (i=1; i<=slides_count; i++) {
              $(id_slider + ' .gslide-pagination').append('<li><span class="gyicon gy-radio-checked2"></span></li>');
            }
          }
        }

        if( slide_config.autoplay.play == true ) {
          setInterval(function(){
        		nextSlider();

        	}, slide_config.autoplay.time);
        }

        if( slide_config.height != null ) {
          setHeight($(id_slider));
          setHeight($(id_slider + ' .gslide-content'));
          setHeight($(id_slider + ' .gslide-content .gslide-item'));
          if( $( id_slider + ' .slide-content .slide-item').find('img') ) {
            setHeight($(id_slider + ' .gslide-content .gslide-item img'));
          }
        }

        //Mostrar numero

        $(id_slider + ' .gslide-content .gslide-item').hide();

        $(id_slider + ' .gslide-content .gslide-item:first').show();

        $(id_slider + ' .gslide-pagination li').css({'color': slide_config.theme.pagination.normal});

        $(id_slider + ' .gslide-pagination li:first').css({'color': slide_config.theme.pagination.active});

        setHeight($(id_slider));

        $(id_slider + ' .gslide-pagination li').click(pagination);

        $(id_slider + ' .gslide-right span').click(nextSlider);

        $(id_slider + ' .gslide-left span').click(prevSlider);
      }

    }

    function pagination(){
  		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

  		$(id_slider + ' .gslide-content .gslide-item').hide(); // Ocultamos todos los slides
  		$(id_slider + ' .gslide-content .gslide-item:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

  		// Dandole estilos a la paginacion seleccionada
  		$(id_slider + ' .gslide-pagination li').css({'color': slide_config.theme.pagination.normal});
  		$(this).css({'color': slide_config.theme.pagination.active});

  		current_pos = paginationPos;

  	}

    function nextSlider(){
  		if( current_pos >= slides_count){current_pos = 1;}
  		else {current_pos++;}

  		$(id_slider + ' .gslide-pagination li').css({'color': slide_config.theme.pagination.normal});
  		$(id_slider + ' .gslide-pagination li:nth-child(' + current_pos +')').css({'color': slide_config.theme.pagination.active});

  		$(id_slider + ' .gslide-content .gslide-item').hide(); // Ocultamos todos los slides
  		$(id_slider + ' .gslide-content .gslide-item:nth-child('+ current_pos +')').fadeIn(); // Mostramos el Slide seleccionado
  	}

    function prevSlider(){
  		if( current_pos <= 1){current_pos = slides_count;}
  		else {current_pos--;}

  		$(id_slider + ' .gslide-pagination li').css({'color': slide_config.theme.pagination.normal});
  		$(id_slider + ' .gslide-pagination li:nth-child(' + current_pos +')').css({'color': slide_config.theme.pagination.active});

  		$(id_slider + ' .gslide-content .gslide-item').hide(); // Ocultamos todos los slides
  		$(id_slider + ' .gslide-content .gslide-item:nth-child('+ current_pos +')').fadeIn(); // Mostramos el Slide seleccionado
  	}

    function setHeight(obj){
      return obj.css({'height' : slide_config.height + 'px'});
    }

    return this;
  };

  //Config params
  $.fn.gslide.defaultOptions = {
    pagination : true,
    autoplay   : {
      play : true,
      time : 5000
    },
    height : 300,
    theme  : {
      pagination : {
        normal : '#4F84C4',
        active : '#2b5282'
      }
    }
  };

})( jQuery );
