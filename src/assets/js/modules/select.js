/*
	Select
 */

$('.js-select-dropdown').each(function () {
	const $this = $(this);
	const $trigger = $this.find('a');
	const $list = $this.find('ul');
	const $listItem = $list.find('li');
	const $select = $this.find('select');

	$trigger.html($listItem.html());

	$trigger.on('click', function (e) {
		e.preventDefault();
		$this.toggleClass('is-open');
	});

	$listItem.on('click', function (e) {
		const $listItem = $(this);
		const value = $listItem.data('value');
		e.preventDefault();

		$select.val(value).change();
		$trigger.html($listItem.html());
		$this.removeClass('is-open');
	});

	$listItem.each(function () {

		$listItem.on('click', function (e) {
			e.preventDefault();
		})
	});
});