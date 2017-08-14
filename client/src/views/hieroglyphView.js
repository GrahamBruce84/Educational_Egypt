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
    p1.innerText = "hello";
    array1 = [7, 4, 11, 11, 14];
    var div1 = document.createElement('div');
    array1.forEach( function(number) {
      var image = document.createElement('img');
      image.src = hieroglyph[number].img;
      div1.appendChild(image);
    });
    div1.appendChild(p1);
    list.appendChild(div1);


    var p2 = document.createElement('p');
    p2.innerText = "code";
    array2 = [2, 14, 3, 4];
    var div2 = document.createElement('div');
    array2.forEach( function(number){
        var image = document.createElement('img');
        image.src = hieroglyph[number].img;
        div2.appendChild(image);
    });
    div2.appendChild(p2);
    list.appendChild(div2);


    var p3 = document.createElement('p');
    p3.innerText = "hieroglyphics";
    array3 = [7, 8, 4, 17, 14, 6, 11, 24, 15, 7, 8, 2, 18];
    var div3 = document.createElement('div');
    array3.forEach( function(number){
        var image = document.createElement('img');
        image.src = hieroglyph[number].img;
        div3.appendChild(image);
    });
    div3.appendChild(p3);
    list.appendChild(div3);


    var p4 = document.createElement('p');
    p4.innerText = "pyramids";
    array4 = [15, 24, 17, 0, 12, 8, 3, 18];
    var div4 = document.createElement('div');
    array4.forEach( function(number){
        var image = document.createElement('img');
        image.src = hieroglyph[number].img;
        div4.appendChild(image);
    });
    div4.appendChild(p4);
    list.appendChild(div4);


    // var p5 = document.createElement('p');
    // p5.innerText = hieroglyph[12].letter + hieroglyph[8].letter + hieroglyph[2].letter + hieroglyph[10].letter + " " + hieroglyph[18].letter + hieroglyph[0].letter + hieroglyph[12].letter + " " + hieroglyph[19].letter + hieroglyph[0].letter + hieroglyph[18].letter + hieroglyph[7].letter + hieroglyph[0].letter + " " + hieroglyph[6].letter + hieroglyph[17].letter + hieroglyph[0].letter + hieroglyph[7].letter + hieroglyph[0].letter + hieroglyph[12].letter;
    // array5 = [12, 8, 2, 10];
    // array6 = [18, 0, 12];
    // array7 = [19, 0, 18, 7, 0];
    // array8 = [6, 17, 0, 7, 0, 12]
    // var div5 = document.createElement('div');
    // array5.forEach( function(number){
    //     var image = document.createElement('img');
    //     image.src = hieroglyph[number].img;
    //     div5.appendChild(image);
    // });
    // var div6 = document.createElement('div');
    // array6.forEach( function(number){
    //     var image = document.createElement('img');
    //     image.src = hieroglyph[number].img;
    //     div6.appendChild(image);
    // });
    // var div7 = document.createElement('div');
    // array7.forEach( function(number){
    //     var image = document.createElement('img');
    //     image.src = hieroglyph[number].img;
    //     div7.appendChild(image);
    // });
    // var div8 = document.createElement('div');
    // array8.forEach( function(number){
    //     var image = document.createElement('img');
    //     image.src = hieroglyph[number].img;
    //     div8.appendChild(image);
    // });
    // list.appendChild(div5);
    // list.appendChild(div6);
    // list.appendChild(div7);
    // list.appendChild(div8);
    // div8.appendChild(p5);

  }

}

module.exports = HieroglyphView;