/*
	Form Split
 */

$('.js-form-split').each(function () {
	const $this = $(this);
	const $trigger = $this.find('.form__trigger');

	$trigger.on('click', function (e) {
		e.preventDefault();
		$this.toggleClass('is-active')
	});

});