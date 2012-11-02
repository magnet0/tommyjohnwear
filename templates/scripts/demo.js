
// Demoing the thin promo bar
$(function(){
	$.getQuery = function( query ) {
		query = query.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var expr = "[\\?&]"+query+"=([^&#]*)";
		var regex = new RegExp( expr );
		var results = regex.exec( window.location.href );
		if( results !== null ) {
			return results[1];
			return decodeURIComponent(results[1].replace(/\+/g, " "));
		} else {
			return false;
		}
	};
});
$(function(){
	var pb = $('.promo-bar');
	var q = $.getQuery('pb');
	if (q == 'on') {
		pb.removeClass('is-hidden');
	};
});