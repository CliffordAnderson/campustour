#Campus Tour

The goal of this project is to create a light-weight, mobile ready map of campus points-of-interest using open source technologies. 

##Technologies

The project uses:

- [GeoJSON](http://geojson.org/) to encode GIS data points;
- [Cloudant](https://cloudant.com/) to store the GIS data points;
- [Leaflet.js](http://leafletjs.com/) for the interactive GIS layer;
- [MapBox](https://www.mapbox.com/mapbox.js/) to create the visual popups.
- [Bootstrap](http://getbootstrap.com/) for web design.

All code contributed by the staff members of the Jean and Alexander Heard Library is licensed under the GPLv3. Third-party code is governed by the respective licenses.

##Installation Instructions

###Prerequisites

###GeoJSON

###Cloudant

IBM [Cloudant](https://cloudant.com/) is a hosted version of [CouchDB](http://couchdb.apache.org/). CouchDB is a document-oriented database that stores data as JSON, uses Javascript for writing Map/Reduce functions, and communicates with applications via HTTP. Cloundant provides a fast and easy way to get started with CouchDB without installing anything on your computer or setting up a server. These characteristics make it easy to store GeoJSON features in the "Cloud" and to send those features on demand to users.

####Set Up

You'll also need to make sure that you've acted [CORS](http://enable-cors.org/) or Cross-Origin Resource Sharing, which allows the Javascript in your browser to request and receive information directly from Cloundant using cross-domain HTTP requests.

![Setting up CORS on Cloudant](http://i.imgur.com/PjlAYU4.png)

If you don't activate CORS, you'll probably come across an error like ```XMLHttpRequest cannot load. Cross origin requests are only supported for HTTP```. If you do, make certain that you've activated CORS on your Cloundant database.

####Adding Points

It's easy to add individual GeoJSON features to Cloudant. To add a point, for example, click on the gear symbol on the upper right corner of your database menu list.

![Imgur](http://i.imgur.com/97zfC2n.png)

Click "New Doc" and you'll generate a simple JSON document with only a single id/value pair.

![Imgur](http://i.imgur.com/fE1KDlA.png)

Add your GeoJSON data within this document, making sure to preserve the "_id" key/value pair at top. (You will need to add a comma to preserve the JSON syntax.) After you've added the GeoJSON data, click on "Save". Assuming that you've saved your information correctly, you'll have added your first point. Notice that you now have a "_rev" key/attribute too. CouchDB uses the "_id" and "_rev" key/value pairs for versioning so it's important not to alter them (unless you know what you're doing).

####Writing Map Functions

![Map Function in Cloudant](http://i.imgur.com/qIFmrsP.png)

###Mapbox

###Leaflet

###Bootstrap


