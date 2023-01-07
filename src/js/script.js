// slick-slider
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
      }
    },
                {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
      }
    },
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }}
        ]
        
      });
    //   настраиваем табы
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
// оживляем каждую кнопку подробнее с помощью функции each
    //   $('.catalog-item__link').each(function(i) {
    //     $(this).on('click', function(e) {
    //         // отменяем стандартное поведение браузера при кликании по ссылке
    //         e.preventDefault();
    //         // команда переключения класса: если класс есть, то он убирается, если его нет, то он добавляется
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    //   });

    //   $('.catalog-item__back').each(function(i) {
    //     $(this).on('click', function(e) {
    //         // отменяем стандартное поведение браузера при кликании по ссылке
    //         e.preventDefault();
    //         // команда переключения класса: если класс есть, то он убирается, если его нет, то он добавляется
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    //   }) 

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                // отменяем стандартное поведение браузера при кликании по ссылке
                e.preventDefault();
                // команда переключения класса: если класс есть, то он убирается, если его нет, то он добавляется
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
          });
      };
      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');
  });

// tiny-slider

  // const slider = tns({
  //   container: '.carousel__inner',
  //   items: 1,
  //   slideBy: 'page',
  //   autoplay: false,
  //   speed: 1200,
    // убираем кнопки по умолчанию и создаем свои кнопки, помещая их в контейнер в index.html, контейнеру задаем позишин релзйтиве
//     <button type="button" class="slick-prev"><img src="icons/left.svg"></button>
//     <button type="button" class="slick-next"><img src="icons/right.svg"></button>
    // controls: false,
    // убираем точки пролистывания
//     nav: false
//   });

// document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
//   });

// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
//   });

//   переименовываем в css на next and prev, выравниваем картинки по центру в файле scss

