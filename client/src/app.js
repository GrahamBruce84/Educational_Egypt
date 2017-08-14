var GodView = require('./views/godView');
var PyramidView = require("./views/pyramidView")
var HieroglyphView = require("./views/hieroglyphView")
var MapView = require("./views/mapView")

var app = function(){
  var godUrl = "http://localhost:3000/api/egypt/gods";
  makeRequest(godUrl, godRequestComplete);

  var pyramidUrl = "http://localhost:3000/api/egypt/pyramids"
  makeRequest(pyramidUrl, pyramidRequestComplete);


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

  var button = document.getElementById('gods');
  button.addEventListener('click', godClick);
};

var godClick = function(){
  var welcomeSection = document.querySelector('.welcome');
  welcomeSection.hidden = true;

  var godSection = document.querySelector('.gods');
  godSection.hidden = false;

  var pyramidSection = document.querySelector('.pyramids');
  pyramidSection.hidden = true;

  var hSection = document.querySelector('.hieroglyphs');
  hSection.hidden = true;

  var mapSection = document.querySelector('.maps');
  mapSection.hidden = true;
}

var pyramidRequestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var pyramidPage = JSON.parse(jsonString);
  console.log(pyramidPage)
  var ui = new PyramidView(pyramidPage);

  var button = document.getElementById('pyramids');
  button.addEventListener('click', pyramidClick);

};

var pyramidClick = function(){
  var godSection = document.querySelector('.gods');
  godSection.hidden = true;

  var pyramidSection = document.querySelector('.pyramids');
  pyramidSection.hidden = false;

  var hSection = document.querySelector('.hieroglyphs');
  hSection.hidden = true;

  var mapSection = document.querySelector('.maps');
  mapSection.hidden = true;

  var welcomeSection = document.querySelector('.welcome');
  welcomeSection.hidden = true;
}

var hieroglyphRequestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var hieroglyphList = JSON.parse(jsonString);
  var ui = new HieroglyphView(hieroglyphList);

  var button = document.getElementById('hieroglyphs');
  button.addEventListener('click', hClick);
};

var hClick = function(){
  var hSection = document.querySelector('.hieroglyphs');
  hSection.hidden = false;

  var godSection = document.querySelector('.gods');
  godSection.hidden = true;

  var pyramidSection = document.querySelector('.pyramids');
  pyramidSection.hidden = true;

  var mapSection = document.querySelector('.maps');
  mapSection.hidden = true;

  var welcomeSection = document.querySelector('.welcome');
  welcomeSection.hidden = true;
}

var mapRequestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var mapList = JSON.parse(jsonString);
  var ui = new MapView(mapList);

  var button = document.getElementById('maps');
  button.addEventListener('click', mapClick);
};

var mapClick = function(){
  var mapSection = document.querySelector('.maps');
  mapSection.hidden = false;

  var hSection = document.querySelector('.hieroglyphs');
  hSection.hidden = true;

  var godSection = document.querySelector('.gods');
  godSection.hidden = true;

  var pyramidSection = document.querySelector('.pyramids');
  pyramidSection.hidden = true;

  var welcomeSection = document.querySelector('.welcome');
  welcomeSection.hidden = true;
}



window.addEventListener('load', app);