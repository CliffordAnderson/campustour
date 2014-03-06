// Copied more or less verbatim from https://www.mapbox.com/mapbox.js/example/v1.0.0/geolocation/

var geolocate = document.getElementById('geolocate');

// This uses the HTML5 geolocation API, which is available on
// most mobile browsers and modern browsers, but not in Internet Explorer
//
// See this chart of compatibility for details:
// http://caniuse.com/#feat=geolocation
if (!navigator.geolocation) {
    geolocate.innerHTML = 'geolocation is not available';
} else {
    geolocate.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        map.locate();
    };
}

// Once we've got a position, zoom and center the map.
map.on('locationfound', function(e) {
    map.fitBounds(e.bounds);
});

// If the user chooses not to allow their location
// to be shared, display an error message.
map.on('locationerror', function() {
    geolocate.innerHTML = 'position could not be found';
});