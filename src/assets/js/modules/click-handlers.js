/**
 * @param  {Event}
 * @return {Void}
 */

$('.js-popup-alt').on('click', function(e) {
	e.preventDefault();

	$($(this).data('target')).toggleClass('is-visible');
})

$('.js-box .box__link').on('click', function(e) {
	e.preventDefault();

	$(this).closest('.box').toggleClass('is-active').find('.box__body').slideToggle();
})


$('.js-toggle-link').on('click', function(e) {
	e.preventDefault();

	$(this).toggleClass('is-active').closest('tr').find('.js-toggle-element').slideToggle();
})

$('.js-remove').on('click', function(e) {
	e.preventDefault();

	$(this).closest('.widget__item').remove();
	
	$('.widget-cart-big').toggleClass('is-empty', $('.widget-cart-big .widget__item').length < 1)

})

$('.js-expand-table').on('click', function(e) {
	e.preventDefault();

	$(this).addClass('hidden').parents('.box--big').addClass('is-expand')
})


$('.js-toggle-accordions').on('click', function(e) {
	e.preventDefault();

	$(this).closest('.section').toggleClass('is-active')
})


$('.section--def .section__head-def h1, .section--def .section__aside-head, .section--products .btn-filter, .section--products .accordions__actions .btn').on('click', function(e) {
	e.preventDefault();

	$(this).closest('.section').toggleClass('is-active')
	// $(this).closest('.section--def').toggleClass('is-active')
})
