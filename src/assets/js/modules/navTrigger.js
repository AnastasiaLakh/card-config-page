/**
 * @param  {Event}
 * @return {Void}
 */

$('.js-nav-trigger').on('click', function(e) {
	e.preventDefault();

	const $this = $(this);

	$this.toggleClass('is-animated');

	$this
		.siblings('.js-header-aside')
		.toggleClass('is-active');
})
