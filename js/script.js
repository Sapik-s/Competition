$(document).ready(function(){
	// Slick слайдер
	$('.experts__wrapper').slick({
		// сколько слайдеров показывает
		slidesToShow: 4,
		// сколько слайдеров листает
		slidesToScroll: 1,
		// автоматическая прокрутка
		autoplay: true,
		// скорость прокрутки
		autoplaySpeed: 3500,
		// включаем стрелки
		arrows: true,
		// включить точки
        dots: false,
    });
	$('.part__wrapper, .part-2__wrapper').slick({
		// сколько слайдеров показывает
		slidesToShow: 8,
		// сколько слайдеров листает
		slidesToScroll: 1,
		// автоматическая прокрутка
		autoplay: true,
		// скорость прокрутки
		autoplaySpeed: 3500,
		// включаем стрелки
		arrows: true,
		// включить точки
        dots: false,
    });
	$('.slider__wrapper').slick({
		// сколько слайдеров показывает
		slidesToShow: 1,
		// сколько слайдеров листает
		slidesToScroll: 1,
		// автоматическая прокрутка
		autoplay: true,
		// скорость прокрутки
		autoplaySpeed: 3500,
		// включаем стрелки
		arrows: true,
		// включить точки
        dots: false,
    });
	
	// Скрипт для стрелки вверх
	$(window).scroll(function() {
		// Пролистывая 1600 пикселей появится стрелка
		if ($(this).scrollTop() > 1600) {
			// Указать класс ссылки, внутри которой находится изображение со стрелкой
			$('.up').fadeIn();
		} else {
			// Указать класс ссылки, внутри которой находится изображение со стрелкой
			$('.up').fadeOut();
		}
	});

	// Плавный скролл наверх
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});
});