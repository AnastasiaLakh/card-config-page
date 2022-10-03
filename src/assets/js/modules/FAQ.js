/*
	FAQ
 */

const activeClass = 'is-active';

/* tabs faq */
$('.js-faq-tabs').each(function () {
	const $faqTabs = $(this);
	const $tabsHeadInner = $faqTabs.find('.tabs__head-inner');
	const $tabs = $faqTabs.find('.tabs__body .tab');
	const $tabsBreadcrumb = $faqTabs.find('.tabs__breadcrumbs li:last-child a');

	$faqTabs.find('.tabs__nav a').on('click', function (e) {
		e.preventDefault();
		const $link = $(this);
		const $parent = $link.parent();
		const index = $parent.index();

		$parent.addClass(activeClass).siblings().removeClass(activeClass);
		$tabsHeadInner.removeClass(activeClass).eq(index).addClass(activeClass);
		$tabs.removeClass(activeClass).eq(index).addClass(activeClass);
		$tabsBreadcrumb.text($link.text());
	});
});

/* accordion faq */

$('.js-faq-accordion').each(function () {
	const $accordion = $(this);

	$accordion.find('.accordion__body').hide();

	$accordion.find('.accordion__head a').on('click', function (e) {
		e.preventDefault();

		$(this).closest('.accordion__section').toggleClass(activeClass).find('.accordion__body').slideToggle();
	});
});