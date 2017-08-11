use wonders_of_egypt;

db.locations.remove({});

db.locations.insert({
  name: "The Great Pyramid at Giza",
  location: {
    lat: 29.9791750,
    lng: 31.1343583
  },
  wiki: "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",
  details: ""
},
{
  name: "Great Sphinx of Giza",
  location: {
    lat: 29.971829446,
    lng: 31.135999456
  },
  wiki: "https://en.wikipedia.org/wiki/Great_Sphinx_of_Giza",
  details: ""
},
{
  name: "Pyramid of Khafre",
  location: {
    lat: 29.9761111,
    lng: 31.1308333
  },
  wiki: "https://en.wikipedia.org/wiki/Pyramid_of_Khafre",
  details: ""
},
{
  name: "Pyramid of Djoser",
  location: location: {
    lat: 22.3369444,
    lng: 31.6255556
  },
  wiki: "https://en.wikipedia.org/wiki/Abu_Simbel_temples",
  details: ""
},
{
  name: "Valley of the Kings",
  location: location: {
    lat: 25.74083,
    lng: 32.60222
  },
  wiki: "https://en.wikipedia.org/wiki/Valley_of_the_Kings",
  details: ""
},
{
  name: "Valley of the Queens",
  location: location: {
    lat: 25.7286000,
    lng: 32.5929000
  },
  wiki: "https://en.wikipedia.org/wiki/Valley_of_the_Queens",
  details: ""
})