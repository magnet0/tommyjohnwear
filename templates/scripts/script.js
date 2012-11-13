$(document).ready(function() {
	
	// move to reponsive check
	// Scroll past chrome on mobile
	// setTimeout(function () {window.scrollTo(0, 1); }, 1000);
		
	// ?
	$('.popover-trigger').popover({delay: { show: 500, hide: 100 }});
	$(document).foundationCustomForms();

	// Smooth scrolling anchors
	$('[href^=#]').smoothmove();

	//checkout saved address handling
	$('#saved-location').change(function(){
		// var target = '#' + $( '#saved-location option[value!=""]:selected' ).val();

		// $( '#shipping-address-preview .address-preview' ).collapse('hide');
		// $( target ).collapse('show');


		// $('option[value!=""]', this).each(function(){
		// 	var target = '#' + $(this).val();
		// 	if ( $(this).is(':selected') ) { $(target).collapse('show') }
		// 	if ( $(this).not(':selected') ) { $(target).collapse('hide') }
		// })

	});
	
	
	/* 
	
	Product Image Color Swap

	Images MUST be formatted like so: name_of_file.color_name.jpg - color name must be seperated by a period.
	
	*/ 
	var swapimgs = $('.m-product-image-viewer .color-swap'); // the default image
	var swapimgssrc = swapimgs.attr('src'); // img src
	// var srcsplit = swapimgssrc.split('.'); // img src split into an array, at the file extension 

<<<<<<< HEAD
	console.log(swapimgs);
=======
	// console.log(srcsplit);
>>>>>>> eb41e615e8e6f29a16564e84739ea3b91c6e4383

	$('.product-form-color-input').change(function() { // when the color chips are selected
		var colorid = $(this).attr('id'); // get the id of the input
		console.log('the color id from button: ' + colorid);

		//replace
		swapimgs.each(function(){
			var iswapimgssrc = $(this).attr('src'); // img src
			var isrcsplit = iswapimgssrc.split('.'); // img src split into an array, at the file extension 

			isrcsplit[1] = colorid;

			var newimgsrc = isrcsplit.join('.');

			$(this).attr('src',newimgsrc);

			console.log(newimgsrc);
		});
		
	});





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

		//on click hide self and reveal next
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
				if ( step.find('#shiptosame').is(':checked') )
				{
					//handle ship to billing address, skip next
					step.next('.checkout-step').children('.checkout-head').addClass('checkout-complete').click(function(){
							content.collapse('toggle');
					}); // check off step and enable toggle
					step.next('.checkout-step').next('.checkout-step').children('.checkout-content').collapse('show'); // reveal step after next 
				} else {
					step.next('.checkout-step').children('.checkout-content').collapse('show');
				}
			}

			
		});

		//on click hide self and reveal next
		edit.click(function(){
			
			var target = $(this).data('target');

			//open target
			$(target).collapse('show');

			return false;
		});

	});
	
	// Quickly trying to get the fucking last minute
	// diagram bullets things...
	$('.diagram-bullet').toggle(function() {
		$(this).next('.diagram-content').show();
	}, function() {
		$(this).next('.diagram-content').hide();
	});
	
	
	// 
	// Add a review prototype
	// 
	var revformhandle = $('a[href=#load-review-form]');
	var revform = $('.add-review');
	
	revform.hide();
	
	revformhandle.click(function() {
		$(this).hide();
		revform.show();
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

	/*
	
		Load
	
	*/
	offscreen(); // offscreen utility panel
	itmRemove($('.mci-delete'), $('.mc-item'));	// removing items from minicart
	$('[rel=tooltip]').tooltip(); // tooltips, global
	$('.tag-input').tagsInput(); // tags in input fields
	
});