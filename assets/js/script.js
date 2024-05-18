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


        responsive: [
            {
                breakpoint: 576,
                settings: {
                    dots: false,
                }
            }
        ]
    });


    // Menu Search
    $(".menu_search_btn").on("click", function () {
        $(".menu_search_area").addClass("show_search");
    });
    $(".close_search").on("click", function () {
        $(".menu_search_area").removeClass("show_search");
    });


    // Favourite Product Slider
    $('.favourite_product_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    // Single product slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ]
    });



    // Showcase Slider
    $('.showcase_single_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',
    });


    // Testimonial Slider
    $('.testimonial_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });



    // review Slider
    $('.review_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    // branding Slider
    $('.branding_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

























    //=======SELECT_2 JS======
    $(document).ready(function () {
        $('.select_2').select2();
    });


    //=======COUNTER JS======
    $('.count').countUp();


    // Nice select
    $('.select_js').niceSelect();


    // Sidebar category dropdown
    $('.categoty_list li').on("click", function () {
        var isActive = $(this).hasClass("active");
        var submenu = $(this).find('.sidebar_sub_category');

        // get the height of the child of submenu
        var dynamicHeight = 0;
        $(submenu).find('div').each(function () {
            dynamicHeight += $(this).outerHeight(true);
        });

        $(".categoty_list li").removeClass("active");

        // and remove the height of all the submenu
        $(".categoty_list li .sidebar_sub_category").css("height", "0px");

        // toggle the button
        if ($(this).hasClass("active")) {
            $(".categoty_list li").removeClass("active");
            $(submenu).css("height", "0px");
        }

        if (!isActive) {
            $(this).addClass("active");
            $(submenu).css("height", dynamicHeight + "px");
        }
    });


    // Range Slider
    $('.basic').alRangeSlider();
    const options = {
        range: { min: 10, max: 1000, step: 1 },
        initialSelectedValues: { from: 200, to: 800 },
        grid: { minTicksStep: 1, marksStep: 5 },
        theme: "dark",
    };

    $('.range_slider').alRangeSlider(options);
    const options2 = {
        orientation: "vertical"
    };

    // Product details slider
    $('.slider-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider-nav2'
    });
    $('.slider-nav2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for2',
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });



    // Details countdown
    var d = new Date(),
        countUpDate = new Date();
    d.setDate(d.getDate() + 365);
    // default example
    simplyCountdown('.simply-countdown-one', {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate(),
        enableUtc: true
    });


    // details payment slider
    $('.details_payment_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });


    // Sticky sidebar
    $("#sticky_sidebar").stickit({
        top: 90,
    })

    // Sidebar show price & button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1100) {
            if ($('.product_details_area').offset() != undefined) {
                if (!$('.product_details_area').hasClass("show")) {
                    $('.product_details_sidebar').addClass("show");
                }
            }
        }
        else {
            if ($('.product_details_area').offset() != undefined) {
                $('.product_details_sidebar').removeClass("show");
            }
        }
    });


    // Relate product slider
    $('.related_product_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //Mobile menu toggler
    const mobile_menu = document.querySelectorAll(".mobile_dropdown");
    mobile_menu.forEach((dropdown) => {
        const innerMenu = dropdown.querySelector(".inner_menu");
        dropdown.addEventListener("click", () => {
            if (innerMenu.style.maxHeight) {
                innerMenu.style.maxHeight = null;
                dropdown.classList.remove("active");
            } else {
                mobile_menu.forEach((item) => {
                    const menu = item.querySelector(".inner_menu");
                    if (menu !== innerMenu) {
                        menu.style.maxHeight = null;
                        item.classList.remove("active");
                    }
                });
                innerMenu.style.maxHeight = innerMenu.scrollHeight + "px";
                dropdown.classList.add("active");
            }
        });
    });


    //Video player
    $(document).ready(function () {
        var vid = $('#my_video').RTOP_VideoPlayer({
            showFullScreen: true,
            showTimer: true,
            showSoundControl: true
        });
    });


});
