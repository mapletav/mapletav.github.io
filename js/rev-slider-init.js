
  /*-------------------------------------------------------------------------------
    Sliders
  -------------------------------------------------------------------------------*/

  if (typeof $.fn.revolution !== 'undefined') {
    
    $("#rev_slider").revolution({
      sliderType:"standard",
      sliderLayout:"fullscreen",
      dottedOverlay:"none",
      delay:7000,
      autoHeight: 'on',
      minHeight:380,
      navigation: {
        keyboardNavigation:"off",
        keyboard_direction: "horizontal",
        onHoverStop:"off",
        touch:{
          touchenabled:"on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },
        bullets: {
          enable: true,
          hide_onmobile: true,

          direction: "horizontal",
          container: 'layergrid',
          h_align: "right",
          v_align: "bottom",
          h_offset: 30,
          v_offset: 110,
          space: 12
      }
      },
      parallax: {
        type:"scroll",
        origo:"slidercenter",
        speed:300,
        levels:[5,10,15,20,25,30,35,40,45,50,47,48,49,50,51,55],
        disable_onmobile: 'on'
      },
      responsiveLevels:[2048,1600,1260, 992],
      gridwidth:[1370,1100,900, 700],
      gridheight:[800],
      lazyType:"none",
      shadow:0,
      spinner:"off",
      stopLoop:"on",
      stopAfterLoops:0,
      shuffle:"off",
      autoHeight:"on",
      fullScreenAlignForce:"off",
      fullScreenOffsetContainer: ".navbar",
      fullScreenOffset: "",
      disableProgressBar:"on",
      hideThumbsOnMobile:"off",
      hideSliderAtLimit:0,
      hideCaptionAtLimit:0,
      hideAllCaptionAtLilmit:0,
      debugMode:false,
      fallbacks: {
        simplifyAll:"off",
        nextSlideOnWindowFocus:"off",
        disableFocusListener:false,
      }
    });
  }

  if (typeof $.fn.revolution !== 'undefined') {
      
      $("#rev_slider2").revolution({
        sliderType:"standard",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay:7000,
        autoHeight: 'on',
        minHeight:590,
        navigation: {
          keyboardNavigation:"off",
          keyboard_direction: "horizontal",
          onHoverStop:"off",
          touch:{
            touchenabled:"on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          },
        },
      responsiveLevels:[2048,1600,1260, 992],
        gridwidth:[1370,1100,900, 700],
        gridheight:[800, 900,1000,1000],
        lazyType:"none",
        shadow:0,
        spinner:"off",
        stopLoop:"on",
        stopAfterLoops:0,
        shuffle:"off",
        autoHeight:"on",
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: ".navbar",
        fullScreenOffset: "",
        disableProgressBar:"on",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,

        debugMode:false,
        fallbacks: {
          simplifyAll:"off",
          nextSlideOnWindowFocus:"off",
          disableFocusListener:false,
        }
      });
    }

    if (typeof $.fn.revolution !== 'undefined') {
      
      $("#rev_slider3").revolution({
        sliderType:"standard",
        sliderLayout:"auto",
        dottedOverlay:"none",
        delay:100000,
        navigation: {
          keyboardNavigation:"off",
          keyboard_direction: "horizontal",
          onHoverStop:"off",
          touch:{
            touchenabled:"on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          },
        },
      responsiveLevels:[2048,1600,1260, 992],
        gridwidth:[1370,1100,900, 700],
        gridheight:[670],
        lazyType:"none",
        shadow:0,
        spinner:"off",
        stopLoop:"on",
        stopAfterLoops:0,
        shuffle:"off",

        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: "off",
        fullScreenOffset: "",
        disableProgressBar:"on",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,

        debugMode:false,
        fallbacks: {
          simplifyAll:"off",
          nextSlideOnWindowFocus:"off",
          disableFocusListener:false,
        }
      });
    }



    $('.slider-prev').on('click', function(){
        $(".rev_slider").revprev();
    });
  
  $('.slider-next').on('click', function(){
      $(".rev_slider").revnext();
  });

    



