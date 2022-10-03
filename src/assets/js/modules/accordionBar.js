/*
	Accordion Bar
 */
const $win = $(window);

$('.js-accordion-bar').each(function () {
	const $this = $(this);
	const $accordionBar = $this.find('.accordion__bar');
	const $accordionBarShell = $accordionBar.find('.shell');
	const $accordionBarInner = $accordionBar.find('.accordion__bar-inner');
	const $accordionBarActions = $accordionBar.find('.accordion__bar-actions');
	const $accordionBarHint = $accordionBar.find('.accordion__bar-hint');
	const $listPrices = $accordionBar.find('.list-prices');
	const $priceAlt = $accordionBar.find('.price-alt');

	$listPrices.hide();

	$accordionBarActions.on('click', function (e) {
		e.stopPropagation();
	});

	$win.on('load resize orientationchange', function () {
		const hideFromTop = $accordionBarShell.outerHeight() - $accordionBarHint.position().top + $accordionBarHint.outerHeight();
		$this.css('--mobile-hidden-part', `${hideFromTop}px`);
	});

	$accordionBar.on('click', function (e) {
		e.preventDefault();
		$listPrices.slideToggle();
		$priceAlt.slideToggle();
		$accordionBar.toggleClass('is-active');
	});
});