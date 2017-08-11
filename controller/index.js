var express = require("express");
var router = new express.Router();
var path = require('path');

router.use('/api/egypt', require("./egypt.js"));

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

// router.get("/", function(req,res){
//   db.collection("gods").find().toArray(function(err, results){
//     res.json(results);
//   })
// })

module.exports = router;