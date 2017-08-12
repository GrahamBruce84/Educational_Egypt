use wonders_of_egypt;

db.locations.remove({});

db.locations.insert([{
  name: "The Great Pyramid at Giza",
  location: {
    lat: 29.9791750,
    lng: 31.1343583
  },
  wiki: "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",
  details: "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramidsin the Giza pyramid complex bordering what is now El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact."
},
{
  name: "Great Sphinx of Giza",
  location: {
    lat: 29.971829446,
    lng: 31.135999456
  },
  wiki: "https://en.wikipedia.org/wiki/Great_Sphinx_of_Giza",
  details: "The Great Sphinx of Giza(English: The Terrifying One; literally: Father of Dread), commonly referred to as the Sphinx of Gizaor just the Sphinx, is a limestone statue of a reclining sphinx, a mythical creature with the body of a lion and the head of a human.[1] Facing directly from West to East, it stands on the Giza Plateau on the west bank of the Nile in Giza, Egypt. The face of the Sphinx is generally believed to represent the Pharaoh Khafre."
},
{
  name: "Pyramid of Khafre",
  location: {
    lat: 29.9761111,
    lng: 31.1308333
  },
  wiki: "https://en.wikipedia.org/wiki/Pyramid_of_Khafre",
  details: "The Pyramid of Khafre or of Chephren is the second-tallest and second-largest of the Ancient Egyptian Pyramids of Giza and the tomb of the Fourth-Dynasty pharaoh Khafre (Chefren), who ruled from c. 2558 to 2532 BC."
},
{
  name: "Pyramid of Djoser",
  location: {
    lat: 22.3369444,
    lng: 31.6255556
  },
  wiki: "https://en.wikipedia.org/wiki/Abu_Simbel_temples",
  details: "The Pyramid of Djoser (or Djeser and Zoser), or step pyramid (kbhw-ntrw in Egyptian) is an archeological remain in the Saqqara necropolis, Egypt, northwest of the city of Memphis. It was built during the 27th century BC for the burial of Pharaoh Djoser by his vizier, Imhotep. It is the central feature of a vast mortuary complex in an enormous courtyard surrounded by ceremonial structures and decoration."
},
{
  name: "Abu Simbel temples",
  location: {
    lat: 22.3369444,
    lng: 31.6255556
  },
  wiki: "https://en.wikipedia.org/wiki/Abu_Simbel_temples",
  details: "The Abu Simbel temples are two massive rock temples at Abu Simbel, a village in Nubia, southern Egypt, near the border with Sudan. They are situated on the western bank of Lake Nasser, about 230 km southwest of Aswan (about 300 km by road). The complex is part of the UNESCO World Heritage Site known as the 'Nubian Monuments', which run from Abu Simbel downriver to Philae (near Aswan). The twin temples were originally carved out of the mountainside during the reign of Pharaoh Ramesses II in the 13th century BC, as a lasting monument to himself and his queen Nefertari, to commemorate his victory at the Battle of Kadesh. Their huge external rock relief figures have become iconic."
},
{
  name: "Valley of the Kings",
  location: {
    lat: 25.74083,
    lng: 32.60222
  },
  wiki: "https://en.wikipedia.org/wiki/Valley_of_the_Kings",
  details: "The Valley of the Kings, the Valley of the Gates of the Kings is a valley in Egypt where, for a period of nearly 500 years from the 16th to 11th century BC, rock cut tombs were excavated for the Pharaohs and powerful nobles of the New Kingdom (the Eighteenth to the Twentieth Dynasties of Ancient Egypt).The valley stands on the west bank of the Nile, opposite Thebes (modern Luxor), within the heart of the Theban Necropolis.[4] The wadi consists of two valleys, East Valley (where the majority of the royal tombs are situated) and West Valley."
},
{
  name: "Valley of the Queens",
  location: {
    lat: 25.7286000,
    lng: 32.5929000
  },
  wiki: "https://en.wikipedia.org/wiki/Valley_of_the_Queens",
  details: "The Valley of the Queens is a place in Egypt where wives of Pharaohs were buried in ancient times. In ancient times, it was known as Ta-Set-Neferu, meaning –'the place of beauty'."
},
{
  name: "Aswan",
  location: {
    lat: 24.0889000,
    lng: 32.8998000
  },
  wiki: "https://en.wikipedia.org/wiki/Aswan",
  details: "Aswan is a city in the south of Egypt, the capital of the Aswan Governorate. Aswan is a busy market and tourist centre located just north of the Aswan Dams on the east bank of the Nile at the first cataract. The modern city has expanded and includes the formerly separate community on the island of Elephantine."
},
{
  name: "Karnak",
  location: {
    lat: 25.7186111,
    lng: 32.6586111
  },
  wiki: "https://en.wikipedia.org/wiki/Karnak",
  details: "The Karnak Temple Complex, commonly known as Karnak, comprises a vast mix of decayed temples, chapels, pylons, and other buildings. Construction at the complex began during the reign of Senusret I in the Middle Kingdom and continued into the Ptolemaic period, although most of the extant buildings date from the New Kingdom."
}]);

db.gods.remove({});

db.gods.insert([{
  name: "AMUN-Ra",
  godOf: "The Hidden One",
  img: ('/image/amunra.png')
},
{
  name: "MUT",
  godOf: "The Mother Goddess",
  img: ("/image/mut.png")
},
{
  name: "OSIRIS",
  godOf: "The King of Living",
  img: ('/image/osiris.png')
},
{
  name: "ANUBIS",
  godOf: "The Divine Embalmer",
  img: ('/image/anubis.png')
},
{
  name: "RA",
  godOf: "The God of Sun & Radiance",
  img: ('/image/ra.png')
},
{
  name: "HORUS",
  godOf: "God of Vengeance",
  img: ('/image/horus.png')
},
{
  name: "THOTH",
  godOf: "God of Knowledge and Wisdom",
  img: ('/image/thoth.png')
},
{
  name: "HATHOR",
  godOf: "Goddess of Motherhood",
  img: ('/image/hathor.png')
},
{
  name: "SEKHMET",
  godOf: "Goddess of War and Healing",
  img: ('./image/sekhmet.png')
},
{
  name: "GEB",
  godOf: "God of Earth",
  img: ('/image/geb.png')
}]);

db.hieroglyph.remove({});

db.hieroglyph.insert([{
  letter: "a",
  img: ('/image/alphabet/a.jpg')
},
{
  letter: "b",
  img: ('/image/alphabet/b.jpg')
},
{
  letter: "c",
  img: ('/image/alphabet/c.jpg')
},
{
  letter: "d",
  img: ('/image/alphabet/d.jpg')
},
{
  letter: "e",
  img: ('/image/alphabet/e.jpg')
},{
  letter: "f",
  img: ('/image/alphabet/f.jpg')
},
{
  letter: "g",
  img: ('/image/alphabet/g.jpg')
},
{
  letter: "h",
  img: ('/image/alphabet/h.jpg')
},
{
  letter: "i",
  img: ('/image/alphabet/i.jpg')
},
{
  letter: "j",
  img: ('/image/alphabet/j.jpg')
},
{
  letter: "k",
  img: ('/image/alphabet/k.jpg')
},
{
  letter: "l",
  img: ('/image/alphabet/l.jpg')
},
{
  letter: "m",
  img: ('/image/alphabet/m.jpg')
},
{
  letter: "n",
  img: ('/image/alphabet/n.jpg')
},
{
  letter: "o",
  img: ('/image/alphabet/o.jpg')
},
{
  letter: "p",
  img: ('/image/alphabet/p.jpg')
},
{
  letter: "q",
  img: ('/image/alphabet/q.jpg')
},
{
  letter: "r",
  img: ('/image/alphabet/r.jpg')
},
{
  letter: "s",
  img: ('/image/alphabet/s.jpg')
},
{
  letter: "t",
  img: ('/image/alphabet/t.jpg')
},
{
  letter: "u",
  img: ('/image/alphabet/u.jpg')
},
{
  letter: "v",
  img: ('/image/alphabet/v.jpg')
},
{
  letter: "w",
  img: ('/image/alphabet/w.jpg')
},
{
  letter: "x",
  img: ('/image/alphabet/x.jpg')
},
{
  letter: "y",
  img: ('/image/alphabet/y.jpg')
},
{
  letter: "z",
  img: ('/image/alphabet/z.jpg')
}
]);