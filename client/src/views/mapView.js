var MapWrapper = require('../../build/mapWrapper');

var MapView = function(locations){
  this.initialize(locations);
}

MapView.prototype = {
  initialize: function(locations){
    var center = { lat: 27, lng: 30 };
    var zoom = 8;
    var mapDiv = document.querySelector("#main-map");
    var map = new MapWrapper(mapDiv, center, zoom);


    locations.forEach(function(location){
      map.addMarker(location);
    })

  }

}

module.exports = MapView;