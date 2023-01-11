// slick-slider
$(document).ready(function(){
		$('.carousel__inner').slick({
				speed: 1200,
				swipe: true,
				dots: false,
				// adaptiveHeight: true,
				prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
				nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
				responsive: [
								{
						breakpoint: 480,
						settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								dots: true,
								arrows: false
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

			// модальные окна. fadeOut() - команда, которая позволяет красиво анимированно скрыть элементы со стр
			// при клике на кнопку с дата-атрибутом консультация, мы сначала вызываем оверлэй-задний фон, затем по айди вызываем форму
			$('[data-modal=consultation]').on('click', function(){
					$('.overlay, #consultation').fadeIn('slow');
			});
			// оживляем крестик (закрыть окно при нажатии)
			$('.modal__close').on('click',function(){
				$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
			});
			// чтобы в карточке отображалось название товара, которое покупатель собирается заказать
			$('.button_mini').each(function(i) {
				$(this).on('click', function(){
					$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
					$('.overlay, #order').fadeIn('slow');
				});
			});

			// валидация форм

			function validateForms(form) {
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
								required: "Пожалуйста, введите свое имя",
								minlength: jQuery.validator.format("Введите {0} символов!")
								},
							phone: "Пожалуйста, введите свой номер телефона",
							email: {
							required: "Пожалуйста, введите свою почту",
							email: "Неправильно введен адрес почты. Пример: name@domain.com"
							}
						}
					});	
			};

		validateForms('#consultation-form');
		validateForms('#consultation form');
		validateForms('#order form');

		$('input[name=phone]').mask("+7 (999) 999-99-99");

		// отправка данных с сайта на почту
	// 	$('form').submit(function(e) {
	// 		// отменяем стандартное поведение браузера, чтобы страница не перезагружалась при отправке формы
	// 		e.preventDefault();

	// 		// чтобы не было возможности отправить пустую функцию
	// 		if(!$(this).valid()) {
	// 			return;
	// 		}
// технология эджэкс нужна для того, чтобы стр не перрезагружалась при отправке данных на сервер 
	// 		$.ajax({
	// 			// эджэксу говорим, что необходимо сделать с данными получить или отправить, в данном сдучае идет отправка на почту. Затем указываем кто будет обрабатывать запрос
	// 			type: "POST",
	// 			url: "/mailer/smart.php",
	// 			// говорим что перед отправкой файла, сервер должен его обработать
	// 			data: $(this).serialize(),
				
	// 		}).done(function(dat) {
	// 			// очищаем все инпуты после отправки формы
	// 			$(this).find("input").val("");
	// 			$('#consultation, #order').fadeOut();
	// 			$('.overlayspl_autoload_register('PHPMailerAutoload');, #thanks').fadeIn('slow');

	// 			// все формы после отправки должны очиститься
	// 			$('form').trigger('reset');
				
	// 		});
	// 		return false;
	// 	});
	// });

    $('form').submit(function(e) {
        e.preventDefault();
 
        if ($(this).valid()) {   
 
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('#consultation, #order').fadeOut();
                $('.overlay, #thanks').fadeIn('fast');
                $('form').trigger('reset');
            });
        }
        return false;
    });

	// Smooth scroll and pageup - создаем анимацию для значка скролла
	// если пользователь пролистал страницу в 1600 пикселей, то стелка появляется, если вернулся вверх - исчезает
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn(); 
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
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

