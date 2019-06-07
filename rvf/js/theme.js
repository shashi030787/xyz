
"use strict";




// Prealoder
 function prealoader () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });
                
        });
  }
}

// Search Option
function searchbox () {
  if($("#searchDropdown").length) {
    $("#searchDropdown").on('click', function() {
      $(".search-form").toggleClass('show')
    })
    $(".close-search").on('click', function() {
      $(".search-form").removeClass('show')
    })
  }
}


// Theme-banner slider 
function BannerSlider () {
  if ($("#main-banner-slider").length) {
    $("#main-banner-slider").revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      loops:false,
      delay:6000,
      navigation: {
          arrows: {
                    style: "hermes",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 60
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 60
                    }
                },
         bullets: {
                  enable: true,
                  hide_onmobile: false,
                  style: "uranus",
                  hide_onleave: false,
                  direction: "horizontal",
                  h_align: "center",
                  v_align: "bottom",
                  h_offset: -15,
                  v_offset: 70,
                  space: 10,
                  tmp: '<span class="tp-bullet-inner"></span>'
              }

      },
      responsiveLevels:[2220,1183,975,751],
                gridwidth:[1170,970,770,550],
                gridheight:[950,950,950,700],
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  disableFocusListener:false,
                }   
    }); 
  };
}


// Fancybox 
function FancypopUp () {
  if ($(".fancybox").length) {
    $(".fancybox").fancybox({
      openEffect  : 'elastic',
        closeEffect : 'elastic',
         helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.8)'
                }
            }
        }
    });
  };
}


// Client Slider
function clientSlider () {
  if($('.client-slider-wrapper').length) {
    $('.client-slider-wrapper').owlCarousel({
        loop:true,
        nav:false,
        navText:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1400,
        lazyLoad:true,
        items:1,
    })
  }
}



// Counter function
function CounterNumberChanger () {
  var timer = $('.timer');
  if(timer.length) {
    timer.appear(function () {
      timer.countTo();
    })
  }
}

// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}



//Contact Form Validation
function contactFormValidation () {
  if($('.form-validation').length){
    $('.form-validation').validate({ // initialize the plugin
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        sub: {
          required: true
        },
        message: {
          required: true
        }
      },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert_success').fadeIn();
                        });
                    },
                    error: function() {
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $('#alert_error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}

// Close suddess Alret
function closeSuccessAlert () {
  if($('.closeAlert').length) {
    $(".closeAlert").on('click', function(){
      $(".alert_wrapper").fadeOut();
    });
    $(".closeAlert").on('click', function(){
      $(".alert_wrapper").fadeOut();
    })
  }
}


// Event Area Map 
function eventMap () {
  if($("#event-area-map").length) {
    var settingsItemsMap = {
          zoom: 12,
          center: new google.maps.LatLng(23.810332, 90.412518),
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE
          },
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById('event-area-map'), settingsItemsMap );
      var image = 'images/logo/map.png';
      var myMarker = new google.maps.Marker({
          position: new google.maps.LatLng(23.810332, 90.412518),
          draggable: true,
          icon: image
      });

      map.setCenter(myMarker.position);
      myMarker.setMap(map);
      // Google map 
  };
}

// Mixitup gallery
function mixitupGallery () {
  if ($("#mixitUp-item").length) {
    $("#mixitUp-item").mixItUp()
  };
}


// Sticky header
function stickyHeader () {
  if ($('.main-menu').length) {
    var sticky = $('.main-menu'),
        scroll = $(window).scrollTop();

    if (scroll >= 190) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    
  };
}


// toggle menu for mobile
function mobileDropdown () {
  if($('.main-menu').length) {
    $('.main-menu nav ul li.dropdown-holder').append(function () {
      return '<i class="fa fa-align-justify" aria-hidden="true"></i>';
    });
    $('.main-menu nav ul li.dropdown-holder .fa').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    }); 
  }
}




// Accordion panel
function themeAccrodion () {
  if ($('.theme-accordion > .panel').length) {
    $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
          var heading = $(this).find('.panel-heading');
          heading.addClass("active-panel");
          
    });
    
    $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
        var heading = $(this).find('.panel-heading');
          heading.removeClass("active-panel");
          //setProgressBar(heading.get(0).id);
    });

  };
}

// Progress Bar
function bootstrapProgress () {
  if($('.skills').length) {
      $(".skills").skill();
  }
}

// Donation amount 
function donateAmount () {
  if($('.donate-price').length) {
    $(".donate-price").on('click', function () {
      var text = $(this).text();
      $(".donate-amount-handelar").val(text);
      });
  }
}


// Close suddess Alret
function menuhide () {
  if($('.main-menu').length) {
    $("a[data-target='#donate']").on('click', function(){
      $(".fixed").addClass('hidemenu');
    });
    $("button.close").on('click', function(){
      $(".fixed").removeClass('hidemenu');
    });
  }
}


// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	   removePlaceholder ();
     searchbox ();
     BannerSlider ();
     FancypopUp ();
     clientSlider ();
     CounterNumberChanger ();
     scrollToTop ();
     contactFormValidation ();
     closeSuccessAlert ();
     eventMap ();
     mixitupGallery ();
     mobileDropdown ();
     themeAccrodion ();
     bootstrapProgress ();
     donateAmount ();
     menuhide ()
  })(jQuery);
});


// Window load function
jQuery(window).on('load', function () {
   (function ($) {
		  prealoader ();
  })(jQuery);
 });


// Window scroll function
jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader ();
  })(jQuery);
});
