use wonders_of_egypt;

db.locations.remove({});

db.locations.insert([{
  name: "The Great Pyramid at Giza",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/1200px-Kheops-Pyramid.jpg",
  location: {
    lat: 29.9791750,
    lng: 31.1343583
  },
  wiki: "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",
  details: "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramidsin the Giza pyramid complex bordering what is now El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact."
},
{
  name: "Great Sphinx of Giza",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Great_Sphinx_of_Giza_May_2015.JPG/1200px-Great_Sphinx_of_Giza_May_2015.JPG",
  location: {
    lat: 29.971829446,
    lng: 31.135999456
  },
  wiki: "https://en.wikipedia.org/wiki/Great_Sphinx_of_Giza",
  details: "The Great Sphinx of Giza(English: The Terrifying One; literally: Father of Dread), commonly referred to as the Sphinx of Gizaor just the Sphinx, is a limestone statue of a reclining sphinx, a mythical creature with the body of a lion and the head of a human.[1] Facing directly from West to East, it stands on the Giza Plateau on the west bank of the Nile in Giza, Egypt. The face of the Sphinx is generally believed to represent the Pharaoh Khafre."
},
{
  name: "Pyramid of Khafre",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Pyramid_of_Khafre_Giza_Egypt_in_2015_2.jpg/1200px-Pyramid_of_Khafre_Giza_Egypt_in_2015_2.jpg",
  location: {
    lat: 29.9761111,
    lng: 31.1308333
  },
  wiki: "https://en.wikipedia.org/wiki/Pyramid_of_Khafre",
  details: "The Pyramid of Khafre or of Chephren is the second-tallest and second-largest of the Ancient Egyptian Pyramids of Giza and the tomb of the Fourth-Dynasty pharaoh Khafre (Chefren), who ruled from c. 2558 to 2532 BC."
},
{
  name: "Pyramid of Djoser",
  image: "http://www.beautifulglobal.com/wp-content/uploads/2015/08/Pyramid-of-Djoser-Saqqara-Necropolis-Egypt-2.jpg",
  location: {
    lat: 29.8713227,
    lng: 31.216543
  },
  wiki: "https://en.wikipedia.org/wiki/Pyramid_of_Djoser",
  details: "The Pyramid of Djoser (or Djeser and Zoser), or step pyramid (kbhw-ntrw in Egyptian) is an archeological remain in the Saqqara necropolis, Egypt, northwest of the city of Memphis. It was built during the 27th century BC for the burial of Pharaoh Djoser by his vizier, Imhotep. It is the central feature of a vast mortuary complex in an enormous courtyard surrounded by ceremonial structures and decoration."
},
{
  name: "Abu Simbel temples",
  image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Abu_Simbel_Temple_May_30_2007.jpg",
  location: {
    lat: 22.3369444,
    lng: 31.6255556
  },
  wiki: "https://en.wikipedia.org/wiki/Abu_Simbel_temples",
  details: "The Abu Simbel temples are two massive rock temples at Abu Simbel, a village in Nubia, southern Egypt, near the border with Sudan. They are situated on the western bank of Lake Nasser, about 230 km southwest of Aswan (about 300 km by road). The complex is part of the UNESCO World Heritage Site known as the 'Nubian Monuments', which run from Abu Simbel downriver to Philae (near Aswan). The twin temples were originally carved out of the mountainside during the reign of Pharaoh Ramesses II in the 13th century BC, as a lasting monument to himself and his queen Nefertari, to commemorate his victory at the Battle of Kadesh. Their huge external rock relief figures have become iconic."
},
{
  name: "Valley of the Kings",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Valley_of_the_Kings_panorama.jpg/818px-Valley_of_the_Kings_panorama.jpg",
  location: {
    lat: 25.74083,
    lng: 32.60222
  },
  wiki: "https://en.wikipedia.org/wiki/Valley_of_the_Kings",
  details: "The Valley of the Kings, the Valley of the Gates of the Kings is a valley in Egypt where, for a period of nearly 500 years from the 16th to 11th century BC, rock cut tombs were excavated for the Pharaohs and powerful nobles of the New Kingdom (the Eighteenth to the Twentieth Dynasties of Ancient Egypt).The valley stands on the west bank of the Nile, opposite Thebes (modern Luxor), within the heart of the Theban Necropolis.[4] The wadi consists of two valleys, East Valley (where the majority of the royal tombs are situated) and West Valley."
},
{
  name: "Valley of the Queens",
  image: "http://images2.mygola.com/valley-of-the-queens_8439736_l.jpg",
  location: {
    lat: 25.7286000,
    lng: 32.5929000
  },
  wiki: "https://en.wikipedia.org/wiki/Valley_of_the_Queens",
  details: "The Valley of the Queens is a place in Egypt where wives of Pharaohs were buried in ancient times. In ancient times, it was known as Ta-Set-Neferu, meaning –'the place of beauty'."
},
{
  name: "Aswan",
  image: "http://www.travcotravel.com/uploads/destinations/main/tour/Aswan.jpg",
  location: {
    lat: 24.0889000,
    lng: 32.8998000
  },
  wiki: "https://en.wikipedia.org/wiki/Aswan",
  details: "Aswan is a city in the south of Egypt, the capital of the Aswan Governorate. Aswan is a busy market and tourist centre located just north of the Aswan Dams on the east bank of the Nile at the first cataract. The modern city has expanded and includes the formerly separate community on the island of Elephantine."
},
{
  name: "Karnak",
  image: "https://ka-perseus-images.s3.amazonaws.com/b02b406b5032091ff5d22d1e8e4349d516aec867.jpg",
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
  godOf: "The Hidden One:",
  img: ('/image/amunra.png'),
  info: "Amun-Ra is the oldest and most worshipped ruler of ancient egyput. His name means 'hidden light'."
},
{
  name: "MUT",
  godOf: "The Mother Goddess:",
  img: ("/image/mut.png"),
  info: "Mut is a self created god who gave birth to herself and not any other!"
},
{
  name: "OSIRIS",
  godOf: "The King of Living:",
  img: ('/image/osiris.png'),
  info: "He is the oldest son of Geb. He is known as the god of the dead but he was also a god of resurrection and fertility."
},
{
  name: "ANUBIS",
  godOf: "The Divine Embalmer:",
  img: ('/image/anubis.png'),
  info: "He was an exteremly ancient diety whos name appears in the oldest parts of tombs of the old kingdom as a guardian and protector of the dead."
},
{
  name: "RA",
  godOf: "The God of Sun & Radiance:",
  img: ('/image/ra.png'),
  info: "Ra was one of the most important gods and is known as the sun god. He was the supreme power in the universe and is sometimes represented as the ruler of all the gods."
},
{
  name: "HORUS",
  godOf: "God of Vengeance:",
  img: ('/image/horus.png'),
  info: "Considered to be a celestial falcon, and so his name could be a specific reference to the flight of the falcon, but could also be seen as a more general solar reference."
},
{
  name: "THOTH",
  godOf: "God of Knowledge and Wisdom:",
  img: ('/image/thoth.png'),
  info: "Thoth is believed to have laid an egg from which Ra was born. Other myths suggest that Thoth created himself through the power of language."
},
{
  name: "HATHOR",
  godOf: "Goddess of Motherhood:",
  img: ('/image/hathor.png'),
  info: "Her titles and attributes are so numerous that she was important in every area of life and death of the ancient egyptians."
},
{
  name: "SEKHMET",
  godOf: "Goddess of War and Healing:",
  img: ('./image/sekhmet.png'),
  info: "One fo the oldest known dieties and her name name derives from the egyptian word 'sekhem' (which means 'power' or 'might'."
},
{
  name: "GEB",
  godOf: "God of Earth:",
  img: ('/image/geb.png'),
  info: "Osiris, Isis, Seth and Nephthyms were the children of Geb and his sister-wife Nut (the Goddess of the Sky)."
}]);

db.pyramids.remove({});

db.pyramids.insert([{
  inform: "As of November 2008, sources cite either 118 or 138 as the number of identified Egyptian pyramids. Most were built as tombs for the country's pharaohs and their consorts during the Old and Middle Kingdom periods. The earliest known Egyptian pyramids are found at Saqqara, northwest of Memphis. The earliest among these is the Pyramid of Djoser (constructed 2630 BC–2611 BC) which was built during the third dynasty. This pyramid and its surrounding complex were designed by the architect Imhotep, and are generally considered to be the world's oldest monumental structures constructed of dressed masonry.The most famous Egyptian pyramids are those found at Giza, on the outskirts of Cairo. Several of the Giza pyramids are counted among the largest structures ever built. The Pyramid of Khufu at Giza is the largest Egyptian pyramid. It is the only one of the Seven Wonders of the Ancient World still in existence.",
  image: ("https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1024px-All_Gizah_Pyramids.jpg")
}]);

db.hieroglyph.remove({});

db.hieroglyph.insert([{
  letter: "a",
  img: ('/image/alphabet/a.png'),
  letterImg: ('/image/alphabet/letterA.png')
},
{
  letter: "b",
  img: ('/image/alphabet/b.png'),
  letterImg: ('/image/alphabet/letterB.png')
},
{
  letter: "c",
  img: ('/image/alphabet/c.png'),
  letterImg: ('/image/alphabet/letterC.png')
},
{
  letter: "d",
  img: ('/image/alphabet/d.png'),
  letterImg: ('/image/alphabet/letterD.png')
},
{
  letter: "e",
  img: ('/image/alphabet/e.png'),
  letterImg: ('/image/alphabet/letterE.png')
},
{
  letter: "f",
  img: ('/image/alphabet/f.png'),
  letterImg: ('/image/alphabet/letterF.png')
},
{
  letter: "g",
  img: ('/image/alphabet/g.png'),
  letterImg: ('/image/alphabet/letterG.png')
},
{
  letter: "h",
  img: ('/image/alphabet/h.png'),
  letterImg: ('/image/alphabet/letterH.png')
},
{
  letter: "i",
  img: ('/image/alphabet/i.png'),
  letterImg: ('/image/alphabet/letterI.png')
},
{
  letter: "j",
  img: ('/image/alphabet/j.png'),
  letterImg: ('/image/alphabet/letterJ.png')
},
{
  letter: "k",
  img: ('/image/alphabet/k.png'),
  letterImg: ('/image/alphabet/letterK.png')
},
{
  letter: "l",
  img: ('/image/alphabet/l.png'),
  letterImg: ('/image/alphabet/letterL.png')
},
{
  letter: "m",
  img: ('/image/alphabet/m.png'),
  letterImg: ('/image/alphabet/letterM.png')
},
{
  letter: "n",
  img: ('/image/alphabet/n.png'),
  letterImg: ('/image/alphabet/letterN.png')
},
{
  letter: "o",
  img: ('/image/alphabet/o.png'),
  letterImg: ('/image/alphabet/letterO.png')
},
{
  letter: "p",
  img: ('/image/alphabet/p.png'),
  letterImg: ('/image/alphabet/letterP.png')
},
{
  letter: "q",
  img: ('/image/alphabet/q.png'),
  letterImg: ('/image/alphabet/letterQ.png')
},
{
  letter: "r",
  img: ('/image/alphabet/r.png'),
  letterImg: ('/image/alphabet/letterR.png')
},
{
  letter: "s",
  img: ('/image/alphabet/s.png'),
  letterImg: ('/image/alphabet/letterS.png')
},
{
  letter: "t",
  img: ('/image/alphabet/t.png'),
  letterImg: ('/image/alphabet/letterT.png')
},
{
  letter: "u",
  img: ('/image/alphabet/u.png'),
  letterImg: ('/image/alphabet/letterU.png')
},
{
  letter: "v",
  img: ('/image/alphabet/v.png'),
  letterImg: ('/image/alphabet/letterV.png')
},
{
  letter: "w",
  img: ('/image/alphabet/w.png'),
  letterImg: ('/image/alphabet/letterW.png')
},
{
  letter: "x",
  img: ('/image/alphabet/x.png'),
  letterImg: ('/image/alphabet/letterX.png')
},
{
  letter: "y",
  img: ('/image/alphabet/y.png'),
  letterImg: ('/image/alphabet/letterY.png')
},
{
  letter: "z",
  img: ('/image/alphabet/z.png'),
  letterImg: ('/image/alphabet/letterZ.png')
}
]);