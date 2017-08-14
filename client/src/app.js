var GodView = require('./views/godView');
var PyramidView = require("./views/pyramidView")
var HieroglyphView = require("./views/hieroglyphView")
var MapView = require("./views/mapView")

var app = function(){
  var godUrl = "http://localhost:3000/api/egypt/gods";
  makeRequest(godUrl, godRequestComplete);

  var pyramidUrl = "http://localhost:3000/api/egypt/pyramids"
  // pyramidMakeRequest(pyramidUrl, pyramidRequestComplete);

  var hieroglyphUrl = "http://localhost:3000/api/egypt/hieroglyph";
  makeRequest(hieroglyphUrl, hieroglyphRequestComplete);

  var mapUrl = "http://localhost:3000/api/egypt/map";
  makeRequest(mapUrl, mapRequestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

var godRequestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var godList = JSON.parse(jsonString);
  var ui = new GodView(godList);
};

var pyramidRequestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var pyramidPage = JSON.parse(jsonString);
  var ui = new PyramidView(pyramidPage);
};

var hieroglyphRequestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var hieroglyphList = JSON.parse(jsonString);
  var ui = new HieroglyphView(hieroglyphList);
};

var mapRequestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var mapList = JSON.parse(jsonString);
  var ui = new MapView(mapList);
};


window.addEventListener('load', app);