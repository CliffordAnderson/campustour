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

This project runs with any web server; it does not require the use of  server-side technologies (like PHP, NodeJS, etc.). The project deploys HTML and Javascript files via HTTP to the client's device. The client then requests a base map using JSONP from Mapbox and requests the points to display (again using JSONP) from Cloudant. 

![Project Architecture](http://i.imgur.com/zTF3ZiS.png?1)

The project does not require the installation of any database on the server. Rather, you will need accounts at both Mapbox and Cloudant to get started.

###Prerequisites

Set up an account at [Mapbox](https://www.mapbox.com) and then create a [new project](https://www.mapbox.com). After you have created a base map, copy the map ID. You will need this ID to connect your project to your map. You will also need to set up an account with [Cloudant](https://cloudant.com/). After you sign up for an account, click "Add New Database" to create a database to store your GeoJSON points.

###GeoJSON

###Cloudant

IBM [Cloudant](https://cloudant.com/) is a hosted version of [CouchDB](http://couchdb.apache.org/). CouchDB is a document-oriented database that stores data as JSON, uses Javascript for writing Map/Reduce functions, and communicates with applications via HTTP. Cloundant provides a fast and easy way to get started with CouchDB without installing anything on your computer or setting up a server. These characteristics make it easy to store GeoJSON features in the "cloud" and to send those features on demand to users.

####Set Up


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


