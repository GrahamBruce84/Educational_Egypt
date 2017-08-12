var HieroglyphView = function(hieroglyph){
  this.render(hieroglyph);
}

HieroglyphView.prototype = {
  render: function(hieroglyph){
    console.log(hieroglyph);
    var list = document.getElementById('hieroglyph_list');

    var info = document.createElement('p');
    info.innerText = "Although hieroglyphics are Egyptian, the word hieroglyphics is Greek. “Hiero” means “holy” and “glyphics” means “marks” or “writings” – so the word means “holy writings“.";

    list.appendChild(info);

    hieroglyph.forEach( function(letter){
      var p = document.createElement('p');
      p.innerText = letter.letter;
      p.classList = "letter__description";
      var image = document.createElement('img');
      image.src = letter.img;
      image.classList = "letter__wrap";
      var div = document.createElement('div');
      div.classList = "letterItem";

      image.addEventListener('mouseover', function(){
        p.classList.add('titleShow');
      })

      image.addEventListener('mouseout', function(){
        p.classList.remove('titleShow');
      });

      div.appendChild(image);
      div.appendChild(p);
      list.appendChild(div);
    })

    var list = document.getElementById('hieroglyph_quiz');
    var p = document.createElement('p');
    p.innerText = hieroglyph[7].letter + hieroglyph[4].letter + hieroglyph[11].letter + hieroglyph[11].letter + hieroglyph[14].letter;
    var image1 = document.createElement('img');
    image1.src = hieroglyph[7].img;
    var image2 = document.createElement('img');
    image2.src = hieroglyph[4].img;
    var image3 = document.createElement('img');
    image3.src = hieroglyph[11].img;
    var image4 = document.createElement('img');
    image4.src = hieroglyph[11].img;
    var image5 = document.createElement('img');
    image5.src = hieroglyph[14].img;
    var div = document.createElement('div');

    div.appendChild(image1);
    div.appendChild(image2);
    div.appendChild(image3);
    div.appendChild(image4);
    div.appendChild(image5);
    div.appendChild(p);
    list.appendChild(div);
  }

}

module.exports = HieroglyphView;