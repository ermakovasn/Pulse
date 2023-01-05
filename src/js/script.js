// slick-slider
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }}
        ]
      });
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