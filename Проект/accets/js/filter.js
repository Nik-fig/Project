jQuery(document).ready(function($) {
	let filter=$("[data-filter]")
	filter.on("click", function() {
	let cat=$(this).data('filter');

	if (cat=='all')
	{
		$(".showWindow").find("[data-cat]").each(function() {
			$(this).removeClass();
			$(this).addClass('block');
		});
	}
	else{
		$(".showWindow").find("[data-cat]").each(function() {

		let item = $(this).data('cat');
		console.log(item);
		if (item != cat) {
			$(this).removeClass('block');
			$(this).addClass('hide');
		}
		else
		{
			$(this).addClass('block');
			$(this).removeClass('hide');
		}
		});
		}
	});
});