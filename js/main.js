
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
    $(".slide-3").owlCarousel({
        loop: true,
        margin: 35,
        center: true,
        nav: false,
        dots: false,
        items: 3,
        responsive: {
            '0': {
                items: 1,
                nav: false
            },
            '544': {
                items: 3,
                nav: false
            },
            '600': {
                items: 3,
                nav: true
            },
            '992': {
                nav: true
            }
        }
    });
    
});