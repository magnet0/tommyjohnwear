$(document).ready(function() {
   $('.popover-trigger').popover({delay: { show: 500, hide: 100 }});

   $(document).foundationCustomForms();


	function offscreen () {
		var $ostoggle = $('.os-toggle');
	    var $ospanel = $('.os-panel');
	    
	    $ostoggle.click(function(e) {
	        var ostarget = $(this).attr('href');
	        $('body').toggleClass('active-os-panel');
            $(ostarget).toggleClass('is-showing');
            e.preventDefault();
	    });
	}


	offscreen();

});