const $accordion = $('.js-accordion');
const $sectionNav = $('.section__nav');

$sectionNav.on('click', 'a', function(e) {
	e.preventDefault();
	const $this = $(this);
	const targetId = $this.attr('href');
	const target = $this.closest('.section__bar').siblings('.section__inner').find(`${targetId}`);

	$this.parent().siblings().removeClass('is-current');
	$this.parent().addClass('is-current')
	$('html, body').animate({ scrollTop: target.offset().top - (160)}, 200);

	if (targetId === '#overview') {
		return;
	}

	target.find('.accordion__section').toggleClass('is-active');
	target.find('.accordion__section').children('.accordion__body').slideToggle();
}) 

$('.js-accordion .accordion__section').not('.is-current').find('.accordion__body').hide();
$('.js-accordion-multiple .accordion__section').not('.is-active').find('.accordion__body').hide();

$accordion.on('click', '.accordion__head', function() {
	const $this = $(this);

	$this.parent().toggleClass('is-active');
	$this.next().slideToggle();
	$this.parent()
			.siblings()
				.find('.accordion__body')
					.slideUp();
});


$('.accordion-alt').on('click', '.accordion__head', function() {
	$(this)
		.closest('.accordion-alt')
		.toggleClass('is-active')
		.find('.accordion__body')
		.slideToggle()
		.closest('.accordion')
		.siblings()
		.removeClass('is-active')
		.find('.accordion__body')
		.slideUp()
})

$('.widget-benefits .widget-item__head').on('click', function() {
	$(this)
		.closest('.widget-item')
		.toggleClass('is-active')
		.find('.widget-item__body')
		.slideToggle()
})

$('.js-accordion-multiple .accordion__head a').on('click', function (e) {
	e.preventDefault();
	$(this).parent()
	.next()
	.slideToggle()
	.closest('.accordion__section').toggleClass('is-active');

});