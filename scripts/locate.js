//Adapted from https://www.mapbox.com/mapbox.js/example/v1.0.0/geolocation/

var geolocate = document.getElementById('geolocate');

// This uses the HTML5 geolocation API, which is available on
// most mobile browsers and modern browsers, but not in Internet Explorer
if (!navigator.geolocation) {
    geolocate.innerHTML = ':(';
} else {
    geolocate.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        map.locate({setView: true, maxZoom: 19});
    };
}

// Once we've got a position, add a tooltip to indicate the user's position
map.on('locationfound', function(e) {
    var loc = 
    	{
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [e.latlng.lng, e.latlng.lat]
        },
        properties: {
            'marker-color': '#F00',
            'marker-symbol': 'heart'
        }
    };
    geoJson["locations"] = geoJson.push(loc);
    map.featureLayer.setGeoJSON(geoJson);

});

// If the user chooses not to allow their location
// to be shared, display an error message.
map.on('locationerror', function() {
    geolocate.innerHTML = ':(';
});