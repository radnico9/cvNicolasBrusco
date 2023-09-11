$( document ).ready(function() {
  
    var $aboutTitle = $('.sobre-mi .contenido h2');
    var $developmentWrapper = $('.development-wrapper');
    var developmentIsVisible = false;


  /*  principal */

  $('.principal .contenido .header').delay(500).animate({
    'opacity':'1',
    'top': '50%'
  },1000);


  $(window).scroll( function(){

    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /*  sobre mi*/ 
    if( bottom_of_window > ($aboutTitle.offset().top + $aboutTitle.outerHeight())){
      $('.sobre-mi .contenido h2').addClass('tituloVisible');
    } 

  /* experiencia */

      
      $('.experiencia .contenido .hidden').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();

          
          if( bottom_of_window > bottom_of_object ){

            $(this).animate({
              'opacity':'1',
              'margin-left': '0'
            },600);
          }
      });

  /* skills */

    var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;

    if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){

      $('.skills-bar-container li').each( function(){

        var $barContainer = $(this).find('.bar-container');
        var dataPercent = parseInt($barContainer.data('percent'));
        var elem = $(this).find('.progressbar');
        var percent = $(this).find('.percent');
        var width = 0;

        var id = setInterval(frame, 15);

        function frame() {
          if (width >= dataPercent) {
              clearInterval(id);
          } else {
            width++;
            elem.css("width", width+"%");
            percent.html(width+" %");
          }
        }
      });
      developmentIsVisible = true;
    }
  }); 
});