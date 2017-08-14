var GodView = require('./views/godView');
var PyramidView = require("./views/pyramidView")
var HieroglyphView = require("./views/hieroglyphView")

var app = function(){
  var godUrl = "http://localhost:3000/api/egypt/gods";
  godMakeRequest(godUrl, godRequestComplete);


  var pyramidUrl = "http://localhost:3000/api/egypt/pyramids"
  // makeRequest(pyramidUrl, requestComplete);

  var hieroglyphUrl = "http://localhost:3000/api/egypt/hieroglyph";
  hieroglyphMakeRequest(hieroglyphUrl, hieroglyphRequestComplete);
}

var godMakeRequest = function(url, callback){
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

var pyramidMakeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

var pyramidRequestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var pyramidPage = JSON.parse(jsonString);
  var ui = new PyramidView(pyramidPage);
};

var hieroglyphMakeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

var hieroglyphRequestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var hieroglyphList = JSON.parse(jsonString);
  var ui = new HieroglyphView(hieroglyphList);
};




window.addEventListener('load', app);