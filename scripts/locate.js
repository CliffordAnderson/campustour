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
        map.locate({maxZoom: 19, enableHighAccuracy: true});
    };
}

// Once we've got a position, add a tooltip to indicate the user's position
map.on('locationfound', function(e) {
    // Bounds of Vanderbilt campus ([36.150, -86.795], [36.137, -86.816])
    // If the location is detected as out of bounds, show warning and re-center on the map center
	if (e.latlng.lat < 36.137 || e.latlng.lat > 36.150 || e.latlng.lng > -86.796 || e.latlng.lng < -86.816)
  {
		showAlert();
		window.setTimeout(function () {
		    hideAlert();
		}, 4000);
    map.setView([36.145733, -86.800675], 16);
  } else
  {
    map.setView(e.latlng);
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
  }
});

// If the user chooses not to allow their location
// to be shared, display an error message.
map.on('locationerror', function() {
    geolocate.innerHTML = ':(';
});

// Show and hide the alert box

function showAlert(){
  $("#alert").css({"display": "block"}).addClass("in");
}

function hideAlert(){
  $("#alert").removeClass("in").css({"display": "none"});
}
