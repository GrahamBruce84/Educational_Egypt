var Location = function(options) {
  this.name = options.name;
  this.location = {
    lat: options.lat,
    lng: options.lng
  }
  this.wiki = options.wiki;
  this.desc = options.desc;
}

module.exports = Location;