var HieroglyphView = function(hieroglyph){
  this.render(hieroglyph);
}

HieroglyphView.prototype = {
  render: function(hieroglyph){
    console.log(hieroglyph);
    var heading = document.getElementById('hieroglyph_info');

    var info = document.createElement('p');
    info.innerText = "Although hieroglyphics are Egyptian, the word hieroglyphics is Greek. “Hiero” means “holy” and “glyphics” means “marks” or “writings” – so the word means “holy writings“.";
    heading.appendChild(info);


    hieroglyph.forEach( function(letter){
      var list = document.getElementById('hieroglyph_list');
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
    var p1 = document.createElement('p');
    p1.innerText = hieroglyph[7].letter + hieroglyph[4].letter + hieroglyph[11].letter + hieroglyph[11].letter + hieroglyph[14].letter;
    array1 = [7, 4, 11, 11, 14];
    array1.forEach( function(number) {
      var image = document.createElement('img');
      image.src = hieroglyph[number].img;
      
    })
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
    var div1 = document.createElement('div');

    div1.appendChild(image1);
    div1.appendChild(image2);
    div1.appendChild(image3);
    div1.appendChild(image4);
    div1.appendChild(image5);
    div1.appendChild(p1);
    list.appendChild(div1);


    var p2 = document.createElement('p');
    p2.innerText = hieroglyph[2].letter + hieroglyph[14].letter + hieroglyph[3].letter + hieroglyph[4].letter;
    var image6 = document.createElement('img');
    image6.src = hieroglyph[2].img;
    var image7 = document.createElement('img');
    image7.src = hieroglyph[14].img;
    var image8 = document.createElement('img');
    image8.src = hieroglyph[3].img;
    var image9 = document.createElement('img');
    image9.src = hieroglyph[4].img;
    var div2 = document.createElement('div');

    div2.appendChild(image6);
    div2.appendChild(image7);
    div2.appendChild(image8);
    div2.appendChild(image9);
    div2.appendChild(p2);
    list.appendChild(div2);


    var p3 = document.createElement('p');
    p3.innerText = hieroglyph[7].letter + hieroglyph[8].letter + hieroglyph[4].letter + hieroglyph[17].letter + hieroglyph[14].letter + hieroglyph[6].letter + hieroglyph[11].letter + hieroglyph[24].letter + hieroglyph[15].letter + hieroglyph[7].letter + hieroglyph[8].letter + hieroglyph[2].letter + hieroglyph[18].letter;
    var image10 = document.createElement('img');
    image10.src = hieroglyph[7].img;
    var image11 = document.createElement('img');
    image11.src = hieroglyph[8].img;
    var image12 = document.createElement('img');
    image12.src = hieroglyph[4].img;
    var image13 = document.createElement('img');
    image13.src = hieroglyph[17].img;
    var image14 = document.createElement('img');
    image14.src = hieroglyph[14].img;
    var image15 = document.createElement('img');
    image15.src = hieroglyph[6].img;
    var image16 = document.createElement('img');
    image16.src = hieroglyph[11].img;
    var image17 = document.createElement('img');
    image17.src = hieroglyph[24].img;
    var image18 = document.createElement('img');
    image18.src = hieroglyph[15].img;
    var image19 = document.createElement('img');
    image19.src = hieroglyph[7].img;
    var image20 = document.createElement('img');
    image20.src = hieroglyph[8].img;
    var image21 = document.createElement('img');
    image21.src = hieroglyph[2].img;
    var image22 = document.createElement('img');
    image22.src = hieroglyph[18].img;
    var div3 = document.createElement('div');

    div3.appendChild(image10);
    div3.appendChild(image11);
    div3.appendChild(image12);
    div3.appendChild(image13);
    div3.appendChild(image14);
    div3.appendChild(image15);
    div3.appendChild(image16);
    div3.appendChild(image17);
    div3.appendChild(image18);
    div3.appendChild(image19);
    div3.appendChild(image20);
    div3.appendChild(image21);
    div3.appendChild(image22);
    div3.appendChild(p3);
    list.appendChild(div3);
  }

}

module.exports = HieroglyphView;