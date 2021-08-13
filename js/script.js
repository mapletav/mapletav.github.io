(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	if ($('.video-tour .bxslider').length) {
		$('.video-tour .bxslider').bxSlider({
	        nextSelector: '.video-tour #slider-next',
	        prevSelector: '.video-tour #slider-prev',
	        nextText: '<i class="fa fa-angle-right"></i>',
	        prevText: '<i class="fa fa-angle-left"></i>',
	        pagerCustom: '.video-tour .video-pager .thumb-box'
	    });
    };
	
	
	//Update header style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var mainHeader = $('.main-header').height();
			var windowpos = $(window).scrollTop();
			if (windowpos >= mainHeader) {
				$('.sticky-header').addClass('now-visible');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.sticky-header').removeClass('now-visible');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	
	//Revolution Slider Style One
	if($('.style-one .tp-banner').length){

		jQuery('.style-one .tp-banner').show().revolution({
			delay:10000,
			startwidth:1200,
			startheight:860,
			hideThumbs:600,
			
			thumbWidth:80,
			thumbHeight:50,
			thumbAmount:5,
			
			navigationType:"bullet",
			navigationArrows:"0",
			navigationStyle:"preview3",
			
			touchenabled:"on",
			onHoverStop:"off",
			
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,
			
			parallax:"mouse",
			parallaxBgFreeze:"on",
			parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
			
			keyboardNavigation:"off",
			
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:40,
			
			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,
			
			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
			
			shadow:0,
			fullWidth:"on",
			fullScreen:"off",
			
			spinner:"spinner4",
			
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			
			shuffle:"off",
			
			autoHeight:"off",
			forceFullWidth:"on",
			
			hideThumbsOnMobile:"on",
			hideNavDelayOnMobile:1500,
			hideBulletsOnMobile:"on",
			hideArrowsOnMobile:"on",
			hideThumbsUnderResolution:0,
			
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,
			videoJsPath:"",
			fullScreenOffsetContainer: ""
	  });
		
	}
	
	
	//Revolution Slider Style Two
	if($('.style-two .tp-banner').length){

		jQuery('.style-two .tp-banner').show().revolution({
			delay:10000,
			startwidth:1200,
			startheight:1000,
			hideThumbs:600,
			
			thumbWidth:80,
			thumbHeight:50,
			thumbAmount:5,
			
			navigationType:"bullet",
			navigationArrows:"0",
			navigationStyle:"preview3",
			
			touchenabled:"on",
			onHoverStop:"off",
			
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,
			
			parallax:"mouse",
			parallaxBgFreeze:"on",
			parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
			
			keyboardNavigation:"off",
			
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:40,
			
			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,
			
			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
			
			shadow:0,
			fullWidth:"on",
			fullScreen:"off",
			
			spinner:"spinner4",
			
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			
			shuffle:"off",
			
			autoHeight:"off",
			forceFullWidth:"on",
			
			hideThumbsOnMobile:"on",
			hideNavDelayOnMobile:1500,
			hideBulletsOnMobile:"on",
			hideArrowsOnMobile:"on",
			hideThumbsUnderResolution:0,
			
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,
			videoJsPath:"",
			fullScreenOffsetContainer: ""
	  });
		
	}
	
	
	//Jquery Tabs Box
	if($('.tabs-box').length){
		//Tabs
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			
			e.preventDefault();
			var target = $($(this).attr('href'));
			
			target.parents('.tabs-box').children('.tab-buttons').children('.tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			target.parents('.tabs-box').children('.tab-content').children('.tab').fadeOut(0);
			target.parents('.tabs-box').children('.tab-content').children('.tab').removeClass('active-tab');
			$(target).fadeIn(300);
			$(target).addClass('active-tab');
		});
		
	}
	
	
	//Floor Plans Hide Show Function
	if($('.floor-plans-section .links-nav').length){
		
		//Links Nav SLide Toggle
		$('.floor-plans-section .links-nav .btn-toggle').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).next('.toggle-nav'));
			$(target).slideToggle(300);
		});
		
		
		//Floor Plans Images Hide Show
		$('.floor-plans-section .links-nav .toggle-nav li a').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('.floor-plans-section .links-nav .toggle-nav li a').removeClass('active');
			$(this).addClass('active');
			$('.floor-plans-section .floors-content .content-box').removeClass('collapsed');
			$('.floor-plans-section .floors-content .content-box').fadeOut(0);
			$(target).fadeIn(300);
		});
		
	}
	
	
	//Tabbed Floor Plans Function
	if($('.tabbed-floor-plans .floor-btn').length){
		
		//Floor Details Hide Show
		$('.tabbed-floor-plans .floor-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('.tabbed-floor-plans .floor-btn').removeClass('active');
			$(this).addClass('active');
			$('.tabbed-floor-plans .floor-details').removeClass('collapsed');
			$('.tabbed-floor-plans .floor-details ').fadeOut(0);
			$(target).fadeIn(300);
		});
		
	}
	
	
	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : 0 
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.bind('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();
	
	
	
	// Nearby Locations Map
	if($('#locations-box').length){
	  
		$('#locations-box').gMap({
			controls: false,
			scrollwheel: false,
			maptype: 'ROADMAP', // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
			markers: [
				{
					latitude: 24.062040,
					longitude: 89.871008,
					icon: {
						image: "images/icons/marker-one.png",
						iconsize: [32, 44],
						iconanchor: [32,44]
					}
				},
				{
					latitude: 23.997445,
					longitude: 89.753155,
					icon: {
						image: "images/icons/marker-two.png",
						iconsize: [32, 44],
						iconanchor: [32,44]
					}
				},
				{
					latitude: 23.980507,
					longitude: 89.984305,
					icon: {
						image: "images/icons/marker-three.png",
						iconsize: [32, 44],
						iconanchor: [32,44]
					}
				},
				{
					latitude: 23.907838,
					longitude: 90.039923,
					icon: {
						image: "images/icons/marker-four.png",
						iconsize: [32, 44],
						iconanchor: [32,44]
					}
				}
			],
			icon: {
				image: "images/icons/map-marker.png", 
				iconsize: [32, 44],
				iconanchor: [32,44]
			},
			latitude: 24.062040,
			longitude: 89.871008,
			zoom: 10
		});
	}
	
	
	
	//Three Column Slider
	if ($('.column-carousel.three-column').length) {
		$('.column-carousel.three-column').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			autoplayHoverPause:false,
			autoplay: 5000,
			smartSpeed: 700,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1100:{
					items:3
				}
			}
		});    		
	}
	
	//Testimonials Slider (One COlumn Testimonials)
	if ($('.testimonial-slider .slider').length) {
		$('.testimonial-slider .slider').bxSlider({
			adaptiveHeight: true,
			auto:true,
			controls: true,
			pause: 5000,
			speed: 500,
			pager: false,
			mode:'fade'
		});	
	}
	
	
	
	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	
	//Mixitup Gallery
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	//Appointment Calendar
	if($('#appoinment_calendar').length) {
		$('#appoinment_calendar').monthly();
	}
	
	
	// Datepicker
	if($(".datepicker").length) {
		$( ".datepicker" ).datepicker();
	}
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

    if ($("a.video-fancybox").length) {
        $("a.video-fancybox").on('click', function() {
            $.fancybox({
                'padding': 0,
                'autoScale': false,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'title': this.title,
                'width': 680,
                'height': 495,
                'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                'type': 'swf',
                openEffect: 'elastic',
                closeEffect: 'elastic',
                helpers: {
                    media: {}
                },
                'swf': {
                    'wmode': 'transparent',
                    'allowfullscreen': 'true'
                }
            });

            return false;
        });
    };

	
	
	//Gallery Popup Hide / Show
	if($('.has-gallery-popup').length){
		
		//Show Gallery Popup
		$('.has-gallery-popup').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('body').addClass('popup-visible');
			$(target).addClass('now-visible');
		});
		
		//Show Gallery Popup
		$('.gallery-box .btn-close,.gallery-box .bg-fade-layer').on('click', function() {
			$('.gallery-box').removeClass('now-visible');
			$('body').removeClass('popup-visible');
		});
		
	}
	

	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}


	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
	});

	

})(window.jQuery);