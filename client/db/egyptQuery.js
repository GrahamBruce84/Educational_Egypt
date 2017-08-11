var MongoClient = require("mongodb").MongoClient;

var EgyptQuery = function() {
  this.url = "mongodb://localhost:27017/wonders_of_egypt";
};

EgyptQuery.prototype = {
  godAll: function(callback) {
    MongoClient.connect(this.url. function(err, db) {
      var collection = db.collection("gods");
      collection.find().toArray(function(err, result) {
        callback(result);
      })
    })
  };
}