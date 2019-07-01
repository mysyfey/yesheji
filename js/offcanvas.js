/*! Bootstrap-off-canvas-push - v1.0.2
 * Copyright (c) 2015 Steffen Ermel; Licensed MIT *
 */
jQuery(document).ready(function($) {

    if (window.matchMedia("(max-width: 735px)").matches == false) {
        $('.dropdown').hover(function() {
            $(this).find('.dropdown-menu').addClass("show");
            $('.dropdown-overlay').addClass("show");
        }, function() {
            $(this).find('.dropdown-menu').removeClass("show");
            $('.dropdown-overlay').removeClass("show");
        });
    } else 
        $('.dropdown-menu').addClass("show");

    function whichTransitionEvent() {
        var el = document.createElement('event'),
            transitionEvents = {
                'WebkitTransition': 'webkitTransitionEnd', // Saf 6, Android Browser
                'MozTransition': 'transitionend', // only for FF < 15
                'transition': 'transitionend' // IE10, Opera, Chrome, FF 15+, Saf 7+
            };
        for (var t in transitionEvents) {
            if (el.style[t] !== undefined) {
                return transitionEvents[t];
            }
        }
    }
    var transitionEvent = whichTransitionEvent();



    $('[data-toggle="offcanvas"], .overlay').click(function() {
        $('.overlay').toggleClass('active');
        $('html').toggleClass('active');
        $('.row-offcanvas').toggleClass('active');
        $('.sidebar-offcanvas').toggleClass('active');
        $('.navbar-toggle').toggleClass('collapsed');
        $('.navbar-collapse').addClass('transition');
        $('.transition').one(transitionEvent,
            function(e) {
                $('.navbar-collapse').removeClass('transition');
            });
    });

    $('.navbar .linky a').click(function() {
        $('.overlay').removeClass('active');
        $('html').removeClass('active');
        $('#navbar').removeClass('in');
        $('.row-offcanvas').removeClass('active');
        $('.sidebar-offcanvas').removeClass('active');
        $('.navbar-toggle').addClass('collapsed');
        $('.navbar-collapse').addClass('transition');
        $('.transition').one(transitionEvent,
            function(e) {
                $('.navbar-collapse').removeClass('transition');
            });
    });

    /*$('.overlay').swiperight(function () {
        $('.overlay').addClass('active');
        $('body').addClass('active');
        $('#navbar').addClass('in');
        $('.row-offcanvas').addClass('active');
        $('.sidebar-offcanvas').addClass('active');
        $('.navbar-toggle').removeClass('collapsed');
        $('.navbar-collapse').addClass('transition');
    });

    $('.overlay').swipeleft(function () {
        $('.overlay').removeClass('active');
        $('body').removeClass('active');
        $('#navbar').removeClass('in');
        $('.row-offcanvas').removeClass('active');
        $('.sidebar-offcanvas').removeClass('active');
        $('.navbar-toggle').addClass('collapsed');
        $('.transition').one(transitionEvent,
             function(e) {
               $('.navbar-collapse').removeClass('transition');
        });
    });*/

});