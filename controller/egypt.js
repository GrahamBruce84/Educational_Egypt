var express = require('express');
var egyptRouter = new express.Router();

egyptRouter.get("/", function(req, res){
  res.json({data: "Hello from Egypt!"})
});

module.exports = egyptRouter;