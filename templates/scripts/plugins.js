/*

	Project Plugins

*/

/*

	SmoothMove
	A simple page scrolling jQuery Plugin	
	@author Collin Olan

*/
(function( $ ){

	$.fn.smoothmove = function( options ) {

		var settings = {
			'speed': 300,
			'offset': 30,
			'target': null
		};

		return this.each(function() {
			if ( options ) { 
				$.extend( settings, options );
			}

			$(this).click(function() {
                var scrollTarget;
				if (settings.target !== null) {
					scrollTarget = settings.target;
				} else {
					scrollTarget = $(this).attr("href");
				}

				if ($(scrollTarget).length > 0) {
					var destination = $(scrollTarget).offset().top;
					$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - settings.offset}, settings.speed );
					return false;
				} else {
					return;
				}

			});

		});

	};

})( jQuery );