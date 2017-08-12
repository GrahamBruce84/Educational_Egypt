var PyramidView = function(items) {
  this.render(items);
};

PyramidView.prototype = {
  render: function(items) {
    var page = document.getElementById('gods_list');

    var pic = document.createElement("img");
    image.src = ("https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1024px-All_Gizah_Pyramids.jpg");

    var info = document.createElement("p");
    info.innerText = "As of November 2008, sources cite either 118 or 138 as the number of identified Egyptian pyramids. Most were built as tombs for the country's pharaohs and their consorts during the Old and Middle Kingdom periods. The earliest known Egyptian pyramids are found at Saqqara, northwest of Memphis. The earliest among these is the Pyramid of Djoser (constructed 2630 BC–2611 BC) which was built during the third dynasty. This pyramid and its surrounding complex were designed by the architect Imhotep, and are generally considered to be the world's oldest monumental structures constructed of dressed masonry.The most famous Egyptian pyramids are those found at Giza, on the outskirts of Cairo. Several of the Giza pyramids are counted among the largest structures ever built. The Pyramid of Khufu at Giza is the largest Egyptian pyramid. It is the only one of the Seven Wonders of the Ancient World still in existence.";
  }
}