$(document).ready(function() {

	// Scroll past chrome on mobile
	setTimeout(function () {window.scrollTo(0, 1); }, 1000);
	
	// ?
	$('.popover-trigger').popover({delay: { show: 500, hide: 100 }});
	$(document).foundationCustomForms();

	// Smooth scrolling anchors
	$('[href^=#]').not('[data-target]').smoothmove();

	/*
	
		Functions
	
	*/

	// Offscreen Panel
	function offscreen () {
		var $ostoggle = $('.os-toggle');
	    var $ospanel = $('.os-panel');
	    $ostoggle.click(function(e) {
	        var ostarget = $(this).data('target');
	        $('body').toggleClass('active-os-panel');
            e.preventDefault();
	    });
	}

	// Responsive Navigation Collapsing
	var $nav = $('[role=navigation]');
	var $navbar = $nav.children('.nav-bar');
	$nav.find('.toggle').click(function(e) {
		$(this).toggleClass('is-open');
		$(this).siblings().toggleClass('is-open');
	})


	/*
	
		Prototype
	
	*/
	// Showing how deleting items would look
	function itmRemove(trig,item) {
		trig.click(function() {
			$(this).parent(item).fadeOut();
		});
	}


	// Load
	
	offscreen();
	itmRemove($('.mci-delete'), $('.mc-item'));
	

});