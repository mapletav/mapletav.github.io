"use strict"; // Start of use strict

// defined global;

var skinCssFolder = 'css/skin/';
var colorSkinFileSelector = $('#customizerSkinCSS');
var menuStickyClass = $('.main-header.stricky');
var cookieArray = {
    'logo-dark': ['logo-dark.png', '.main-header .header-upper .logo img', 'src']
    
};

function customizersetupCookie(color, cookieArrays) {
    // defining param to variables 
    var skinName = color;
    var customizerCookieArray = cookieArrays;

    $.each(cookieArrays, function(index, value) {
        var index
        var value;
        Cookies.remove(index);
        Cookies.set(index, 'skin/' + color + '/img/' + value[0], { expires: 365, path: '/' });
        console.log(index);
        console.log(value[0]);
    });

    Cookies.remove('map-skin');
    Cookies.remove('css-file');
    Cookies.set('map-skin', color, { expires: 365, path: '/' });
    Cookies.set('css-file', color, { expires: 365, path: '/' });
}





if ($('.customizer-box button.toggler').length) {
    $('.customizer-box button.toggler').on('click', function() {
        $('.customizer-box').toggleClass('off on');
    });
};


// function for style switcher
function swithcerMenu() {
    if ($('.customizer-box').length) {

        $('.pattern-box').on('click', function() {
            $('.pattern-box').each(function() {
                $('html').removeClass($(this).data('pattern-name'));
            });
            var className = $(this).data('pattern-name');
            $('html').addClass(className);
            console.log(className);
        });
        $(".customizer-box .navigation-switch").on('click', function() {
            var checker = $(this).find('input');
            if (checker.is(':checked')) {
                menuStickyClass.removeClass('stricky-fixed');
                menuStickyClass.addClass('static');
            } else {
                menuStickyClass.addClass('stricky-fixed');
                menuStickyClass.removeClass('static');
            };

        });

        $(".customizer-box #boxed").on('click', function() {
            Cookies.remove('boxed-layout');
            Cookies.set('boxed-layout', 'boxed', { expires: 365, path: '/' });
            $('body').removeClass('full-width');
            $('body').addClass('boxed');
        });
        $(".customizer-box #full-box").on('click', function() {
            Cookies.remove('boxed-layout');
            $('body').removeClass('boxed');
            $('body').addClass('full-width');
            Cookies.set('boxed-layout', 'full-width', { expires: 365, path: '/' });
        });



        // chnage the theme related img/logo
        $('#styleOptions .color1').on('click', function() {
            customizersetupCookie('color1', cookieArray);
        });

        // chnage the theme related img/logo
        $('#styleOptions .color2').on('click', function() {

            customizersetupCookie('color2', cookieArray);
        });
        // chnage the theme related img/logo
        $('#styleOptions .color3').on('click', function() {
            customizersetupCookie('color3', cookieArray);
        });
        // chnage the theme related img/logo
        $('#styleOptions .color4').on('click', function() {

            customizersetupCookie('color4', cookieArray);

        });

        // doing image replacement task
        $.each(cookieArray, function(index, value) {
            var index
            var value;
            $(value[1]).attr(value[2], Cookies.get(index));
        });

        // seeting up css file
        colorSkinFileSelector.attr('href', skinCssFolder + Cookies.get('css-file') + '.css');
        // seeting up boxed layout
        $('body').addClass(Cookies.get('boxed-layout'));
        // setting up google map class
        $('.google-map').addClass(Cookies.get('map-skin'));

        // console.log(Cookies.get());

    };
}
swithcerMenu();
