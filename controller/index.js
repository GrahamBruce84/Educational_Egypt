var express = require("express");
var router = new express.Router();

router.use('/api/egypt', require("./egypt.js"));

router.get('/', function(req, res){
  res.sendFile(__dirname + '/../Client/Build/index.html')
});

module.exports = router;