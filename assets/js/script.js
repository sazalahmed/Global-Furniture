$(function () {

    "use strict";



    // Menu fix js
    if ($(window).scrollTop() > 1) {
        if ($('.main_menu').offset() != undefined) {
            $('.main_menu').addClass('menu_fix');
        }
    } else {
        if ($('.main_menu').offset() != undefined) {
            $('.main_menu').removeClass('menu_fix');
        }
    };

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            if ($('.main_menu').offset() != undefined) {
                if (!$('.main_menu').hasClass("menu_fix")) {
                    $('.main_menu').addClass("menu_fix");
                }
            }
        }
        else {
            if ($('.main_menu').offset() != undefined) {
                $('.main_menu').removeClass("menu_fix");
            }
        }
    });


    // Category Slider
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        // fade: true,

        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 3,
        //         }
        //     },
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ]
    });


    // Menu Search
    $(".menu_search_btn").on("click", function () {
        $(".menu_search_area").addClass("show_search");
    });
    $(".close_search").on("click", function () {
        $(".menu_search_area").removeClass("show_search");
    });








});
