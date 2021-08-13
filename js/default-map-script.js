
function gMap () {
	if ($('.google-map').length) {
		$('.google-map').each(function () {
			// getting options from html 
			var Self = $(this);
			var mapName = Self.attr('id');
			var mapLat = Self.data('map-lat');
			var mapLng = Self.data('map-lng');
			var iconPath = Self.data('icon-path');
			var mapZoom = Self.data('map-zoom');
			var mapTitle = Self.data('map-title');

			// if zoom not defined the zoom value will be 15;
			if (!mapZoom) {
				var mapZoom = 15;
			};
			// init map
			var map;
			map = new GMaps({
			    div: '#'+mapName,
			    scrollwheel: false,
			    lat: mapLat,
			    lng: mapLng,
			    zoom: mapZoom
			});
			// if icon path setted then show marker
			if(iconPath) {
				map.addMarker({
			    	icon: iconPath,
			    	lat: mapLat,
			      	lng: mapLng,
			      	title: 'Main Head office',
			      	infoWindow: {
						content: '<h3>Head Office</h3> <span>New York, United Kingdom</span> <p>Call us: +1 800 222 930 120</p>'
					}
				});
			}
		});  
	};
}


// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		gMap();
	})(jQuery);
});