$(document).ready(function() {

	var techtargets = $('.tech-item-list').find('a'); // little bullet doodads
	var techoverlayclose = $('.overlay-close'); // close button
	var techsections = $('tech-feature-section'); // each section in overlay
	
	techtargets.each(function(i) {
		var anchor = $(this).attr('href');
		$(this).click(function(e) {
			e.preventDefault();
			toggleTechTarget($(anchor),"open");
		});
	});
	
	techoverlayclose.click(function(e) {
		e.preventDefault();
		$(this).parents('.overlay').addClass('js-hidden');
		$(this).parents('.tech-feature-section').addClass('js-hidden');
		$(this).parents('.tech-feature-section').siblings().addClass('js-hidden');
	});
	
	function toggleTechTarget(target,action) {
		if (action === "open") {
			target.removeClass('js-hidden').parent('.overlay').removeClass('js-hidden');
		} else if (action === "close") {
			target.addClass('js-hidden').parent('.overlay').addClass('js-hidden');
		}
	}
	
});
