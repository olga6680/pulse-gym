$(document).ready(function() {
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/right-solid.png"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false,
            }
        }]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //MODAL 

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });


    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Будь ласка, вкажіть своє ім'я",
                    minlength: jQuery.validator.format("Ім'я повинно бути не меньш за {0} символи!")
                },
                phone: "Будь ласка, вкажіть свій телефон",
                email: {
                    required: "Нам потрібна ваша електронна адреса, щоб зв’язатися з вами",
                    email: "Ваша електронна адреса має бути у форматі name@domain.com"
                }
            }
        });
    };

    valideForms('#consultation-form');
    valideForms('#order .feed-form');
    valideForms('#consultation .feed-form');

    $('input[name=phone]').mask("+3 (999) 999-9999");
});

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false
// });

// document.querySelector('.prev').addEventListener('click', function() {
//     slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener('click', function() {
//     slider.goTo('next');
// });