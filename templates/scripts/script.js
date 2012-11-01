$(document).ready(function() {
	
	// move to reponsive check
	// Scroll past chrome on mobile
	// setTimeout(function () {window.scrollTo(0, 1); }, 1000);
		
	// ?
	$('.popover-trigger').popover({delay: { show: 500, hide: 100 }});
	$(document).foundationCustomForms();

	// Smooth scrolling anchors
	$('[href^=#]').smoothmove();

	//checkout hide/show handling
	$('.checkout-step').each(function(){
		var step = $(this);
		var title = $('.checkout-head', this);
		var content = $('.checkout-content', this);
		var next = $('form .btn', this);
		var edit = $('.co-edit', this);
		var target = next.data('target');

		content.collapse({
		  toggle: false
		})

		//on click hide self and revile next
		next.click(function(){
			
			//this is where form validation would happen

			//swap title icon for check
			title.addClass('checkout-complete').click(function(){
					content.collapse('toggle');
			});

			//close this step
			content.collapse('hide');

			//open next step
			if ( step.next('.checkout-step').children('.checkout-complete').length == 0 )
			{
				step.next('.checkout-step').children('.checkout-content').collapse('show');
			}

			
		});

		//on click hide self and revile next
		edit.click(function(){
			
			var target = $(this).data('target');

			//open target
			$(target).collapse('show');

			return false;
		});

	});

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