var express = require('express');
var egyptRouter = new express.Router();

var EgyptQuery = require("../client/db/egyptQuery");
var query = new EgyptQuery();

egyptRouter.get("/", function(req, res){
  res.json({data: "Hello from Egypt!"})
});

egyptRouter.get("/gods", function(req, res) {
  query.godAll(function(results) {
    res.json(results);
  })
})

egyptRouter.get("/map", function(req, res) {
  query.locationAll(function(results) {
    res.json(results);
  })
})

egyptRouter.get("/pyramids", function(req, res) {
  query.pyramidAll(function(results) {
    res.json(results);
  })
})

egyptRouter.get("/hieroglyph", function(req, res) {
  query.hieroglyphAll(function(results) {
    res.json(results);
  })
})



module.exports = egyptRouter;