/*
  Project Name : Any Purpose
  Author Company : Ewebcraft
  Project Date: 18 May, 2015
  Author Website : http://www.ewebcraft.com
  Author Email : ewebcraft@gmail.com
*/
(function($) {
	
	"use strict";
	
	 //smooth scroll
	 
     $("a[href*='#']").on('click',function(){
	   var target=$(this).attr("href");
	   
	   var tar=target.split("#");
	   var targetSection=tar[1];
	  
	   if (!targetSection || targetSection == '') {
			return;
		}else
		{
			targetSection = '#' + targetSection;
			var targetOffset = Math.floor($(targetSection).offset().top );
			
			//scroll			 
			$('html,body').animate({scrollTop: targetOffset}, 1200, function() {
				
				$(window).scroll();
				
			});
			return false;
		}
	});
	
	// Animate General - Bind
	
    $('.jw-animate-gen').each(function() {
        var $curr = $(this);
        $curr.bind('jw-animate', function() {
            $curr.css('opacity', '');
            $curr.addClass('animated ' + $curr.data('gen'));
        });
    });
	
    // Animate General
	
    $('.jw-animate-gen').each(function() {
        var $curr = $(this);
        var $currOffset = $curr.attr('data-gen-offset');
        if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
            $currOffset = 'bottom-in-view';
        }
        $curr.waypoint(function() {
            $curr.trigger('jw-animate');
        }, {triggerOnce: true, offset: $currOffset});
    });
	
	// page preloader
	
	$(window).load(function() {
		
		$("#loading").delay(2500).toggle( "slide").fadeOut(2000);
			
	});

  /*$('.tour-slider').bxSlider({
    auto: true,
    autoControls: true,
  });*/
  // Accordion
  $('#accordion .panel-title,#accordion .panel-title a').click(function(){
    $('#accordion .collapse').removeClass('in');
    $(this).closest('.panel-default').find('.collapse').addClass('in');
    $('#accordion i').removeClass('fa-minus');
    $('#accordion i').removeClass('fa-plus');
    $('#accordion i').addClass('fa-plus');
    $(this).find('i').addClass('fa-minus');
  });
  $('.nav-tabs li a').click(function(e){
    e.preventDefault;
    $('.nav-tabs li').removeClass('active');
    $(this).parent().addClass('active');
    var lnk = $(this).attr('href');
    lnk = lnk.replace('#', '');
    $('.tab-content .tab-pane').removeClass('active');
    $('#'+lnk).addClass('active');
  });

  $('.amount').counterUp({
          delay: 10, // the delay time in ms
          time: 2000 // the speed time in ms
    }); 

  //Pretty Photo
  $("a[rel^='prettyPhoto']").prettyPhoto(
    {social_tools:false}
  );
/*});*/

    /* Map */ 

    function initialize() {
    var mapProp = {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
      scrollwheel: false,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
  }
  google.maps.event.addDomListener(window, 'load', initialize);  
	
})(jQuery);



/*$(document).ready(function(){*/
	