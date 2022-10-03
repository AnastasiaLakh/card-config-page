import Swiper from "swiper/bundle";
// import 'slick-carousel';

const swiperProduct = new Swiper(".js-slider-product", {
	loop: true,
	slidesPerView: 1,
	centeredSlides: true,
	speed: 500,
	pagination: {
		el: ".swiper-pagination",
		clickable: "true",
	},

	navigation: {
	nextEl: ".slider__next",
		prevEl: ".slider__prev",
	},
	autoplay: {
	delay: 3000,
	},
 });

const swiperPlans = new Swiper(".js-slider-plans", {	
	spaceBetween: 34,
	speed: 1000,
	breakpoints: {
		320: {
			slidesPerView:1,			
			slidesPerGroup: 1,
			centeredSlides: true,
		},
			500: {
				slidesPerView:2,			
				slidesPerGroup: 2,
			},	
			768: {
				slidesPerView:3,
				slidesPerGroup: 3,
			}			
		},     
	pagination: {
			el: ".swiper-pagination",
			clickable: "true",
		},
		navigation: {
		nextEl: ".slider__next",
		prevEl: ".slider__prev",
		disabledClass: "swiper-button-disabled"
		},
		autoplay: {
			delay: 7000,
	},       
});

let swiperBundles;

const windowWidth = $(window).width();

if (windowWidth < 1024) {
	swiperBundles = new Swiper(".js-slider-bundles", {
		slidesPerView: 1,
		speed: 1100,
		centeredSlides: true,
		slidesPerView: 1,
		pagination: {
				el: ".swiper-pagination",
				clickable: "true",
		},
		autoplay: {
				// delay: 7000,
		},
		breakpoints: {
			320: {
				spaceBetween: 55,	
			},
			768: {
				slidesPerView: 2,			
				spaceBetween: 25,	
			}
		}
	});
}

const swiperTabs = new Swiper(".js-slider-tabs", {
	slidesPerView: 1,
	speed: 500,
	loop:true,
	dynamicMainBullets: true,
	allowTouchMove: false,

	pagination: {
      el: '.slider__pagination',
		clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});

$(document).ready(function(){
	var time = 3;
	var $bar,
	  isPause,
	  tick,
	  percentTime;

	$bar = $('.js-slider-tabs .progress');
	var $barRound = $('.progress');
  
	function startProgressbar() {
		// resetProgressbar();
		// percentTime = 0;
		// isPause = false;
		// tick = setInterval(interval, 10);
	}

 	var $rbar = $('.progress circle');
	var rlen = 2 * Math.PI * $rbar.attr('r');
	function interval() {
		percentTime += 1 / (time + 0.1);
		$bar.css({
		  width: percentTime + '%'
		});
		$rbar.css({
		  'stroke-dasharray': rlen,
		  'stroke-dashoffset': rlen * (1 - percentTime / 100)
		});

		if (percentTime >= 100) {
			swiperTabs.slideNext();
		  	startProgressbar();
		}

	}
  
	function resetProgressbar() {
		$bar.css({
		 width: 0+'%' 
		});
		clearTimeout(tick);
	}

	function playSliderAfterPause() {
		resetProgressbar();
		isPause = false;
		tick = setInterval(interval, 10);
	}

	$('.js-pause').on('click', function (e) {
		e.preventDefault();
		playSliderAfterPause();

		$(this).toggleClass('is-paused')
		swiperTabs.autoplay.stop();

		if ($(this).hasClass('is-paused')) {
			resetProgressbar()
		}
	});

	$('.slider__pagination span').on('click', function (e) {
		const $this = $(this);
		startProgressbar()

		const $customPaging = $('.js-paging');
		const index = $this.index();
		$customPaging[index].click();

	});

	$('.js-paging').on('click', function (e) {
		e.preventDefault();
		const $this = $(this);
		$this.addClass('is-active')
			 .siblings()
			 .removeClass('is-active')

		const index = $this.index();
		const $pagingSpan = $('.slider__pagination span');
		$pagingSpan[index].click()
		$('.js-pause').removeClass('is-paused')
	})

	swiperTabs.on('slideChange', function () {
	    $('.js-paging').removeClass('is-active');
		const $customPaging = $('.js-paging');

	    $customPaging.each(function (index, paging) {
	    	if (index == swiperTabs.realIndex) {
	    		$(this).addClass('is-active')
	    	}
	    })
	});

  
  startProgressbar();
  
});

function initSliders() {
	$('.js-slider-brands .slider__slides').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	})

}


$(window).on('load', function(){
	initSliders()
})

// circle bar

if (windowWidth >= 1024 && swiperBundles !== undefined) {
	destroySlider();
} 

const destroySlider = () => {
	swiperBundles.destroy( true, true )
	swiperBundles.pagination.destroy()
	$('.swiper-wrapper').removeAttr('style');
	$('.swiper-slide').removeAttr('style');
}
