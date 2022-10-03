const $stickyBar = $('.js-sticky-bar');
const $header = $('.js-header');
const $hero = $('.js-hero');

if ($hero.length > 0) {
	const heroOffsetTop = $hero.offset().top;
	const heroHeight = $hero.height();
	const headerHeight = $header.height();


	$(window).on('load resize', function (argument) {
		if ($(this).outerWidth() > 767) {
			$stickyBar.css({top: headerHeight});
		} else {
			$stickyBar.css({top: 0});
		}
	})

	$(window).on('scroll load', function () {
		if ($(this).scrollTop() > heroHeight + heroOffsetTop - headerHeight) {
			$stickyBar.addClass('is-visible');
		} else {
			$stickyBar.removeClass('is-visible');
		}
	})
}


