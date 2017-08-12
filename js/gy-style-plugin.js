(function( $ ){
 var config = $.extend({
  'width':'50%',
  'height':'auto',
  'backColor':'rgba(0,0,0,.5)',
  'animation':''
 }, options);

 var animation = {
  fade : function(){
   
  }
 };
 
 $.fn.gyModals = function(modal,options){
  

  return this;
 };
})( jQuery );


/*(function( $ ){
	var methods = {
		init : function( options ) { 
		  //codigo
		},
		show : function( ) {
		  //codigo
		},
		hide : function( ) { 
		  //codigo
		},
		update : function( content ) { 
		  //codigo
		}
  };

$.fn.tooltip = function( method ) {
// Si existe la función la llamamos
if ( methods[method] ) {
  return methods[ method ]
  .apply( this, 
	Array.prototype.slice.call( arguments, 1 )
  );
} else if ( typeof method === 'object' || ! method ) {
  //Si no se pasa ningún parámetro o el parámetro es 
  //un objeto de configuración llamamos al inicializador	
  return methods.init.apply( this, arguments );
} else {
  //En el resto de los casos mostramos un error
  $.error( 'La función ' +  method 
	+ ' no existe en jQuery.tooltip' );
}    
};
})( jQuery );*/