
$(function () {
    $(".slide-1").owlCarousel({
        loop: true,
        margin: 35,
        center: true,
        nav: true,
        dots:false,
        items: 1,
        responsive: {
            '0': {
                items: 1,
                nav: false
            },
            '544': {
                items: 1.5,
                nav: false
            },
            '992':{
                items: 2.5,
                nav: false
            },
            '1200':{
                items: 3,
                nav: true
            }
        }
    });
    $(".slide-2").owlCarousel({
        loop: true,
        margin: 45,
        center: true,
        nav: true,
        dots: false,
        items: 3,
        responsive: {
            '0': {
                items: 1,
                nav: false
            },
            '544': {
                items: 1.4,
                nav: false
            },
            '800': {
                items: 2.2,
                nav: false
            },
            '992': {
                items: 2.8,
                nav: false
            },
            '1200': {
                items: 3.5,
                nav: false
            },
            '1500': {
                items: 4.7,
                nav: true
            }
        }
    });
    $('.slider-info').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        centerMode: false,
        asNavFor: '.slider-reviews',

    });
    $('.slider-reviews').on('init beforeChange', function (e, slick, curr, next) {
        const
            count = slick.slideCount,
            show = slick.options.slidesToShow,
            center = slick.options.centerMode,
            index = (next | 0) - center * (count > show ? show / 2 | 0 : 0),
            selector = shift => `[data-slick-index="${index + shift * count}"]`;

        $('.slick-xxx', this).removeClass('slick-xxx');
        $([0, 1, -1].map(selector).join(', '), this).addClass('slick-xxx');
    }).slick({
        slidesToShow: 3, //сколько слайдов показывать в карусели
        slidesToScroll: 1, // сколько слайдов прокручивать за раз
        arrows: true,
        asNavFor: '.slider-info',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
});