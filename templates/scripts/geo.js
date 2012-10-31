$(document).ready(function() {
	navigator.geolocation.getCurrentPosition(function(pos){
        var latlng = pos.coords.latitude + "," + pos.coords.longitude;
        var apiurl = 'http://maps.google.com/maps/geo?output=json&sensor=false&q=' + latlng;
        var yqlqry = encodeURIComponent('select * from json where url="'+apiurl+'"');
        var yqlurl = 'http://query.yahooapis.com/v1/public/yql?q='+yqlqry+'&format=json&callback=?';
        $.getJSON(yqlurl,
            function(data){
                var gcountry = data.query.results.json.Placemark.AddressDetails.Country.CountryName;
				var gstate   = data.query.results.json.Placemark.AddressDetails.Country.AdministrativeArea.AdministrativeAreaName;
				var gcity    = data.query.results.json.Placemark.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.LocalityName;
				var gaddr    = data.query.results.json.Placemark.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.DependentLocality.Thoroughfare.ThoroughfareName;
                // alter the forms here
				var form = $('#store-locator');
				
				form.find('input').each(function(i) {
					
					if ($(this).attr('name') == 'address') {
						$(this).val(gaddr);
					} else if ($(this).attr('name') == 'city') {
						$(this).val(gcity);
					} else if ($(this).attr('name') == 'state') {
						$(this).val(gstate);
					};
				});
				// $('#store-locator [name=city]').val(gcity);
				// $('#store-locator [name=state]').val(gstate);

            }
        );
    });	
});