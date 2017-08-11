var GodView = require('./views/godView');

var app = function(){
  var url = "http://localhost:3000/api/egypt/gods";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var godList = JSON.parse(jsonString);
  var ui = new GodView(godList);
};

window.addEventListener('load', app);