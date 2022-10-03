/**
 * @param  {event}
 * @return {Void}
 */
$('.js-tabs').on('click', '.tabs__nav a', function(e) {
	e.preventDefault();

	const $this = $(this);
	const tabId = $this.attr('href');
	const $target = $(tabId);

	const $dataTarget = $this.data('target');

	$($dataTarget).addClass('is-active')
			.siblings()
			.removeClass('is-active');

	$target.addClass('is-active')
			.siblings()
			.removeClass('is-active');

	$this.parent().addClass('is-active')
					.siblings()
					.removeClass('is-active');		
})
