var HieroglyphView = function(hieroglyph){
  this.render(hieroglyph);
}

HieroglyphView.prototype = {
  render: function(hieroglyph){
    console.log(hieroglyph);
    hieroglyph.forEach( function(letter){
      var list = document.getElementById('hieroglyph_list');
      var p = document.createElement('p');
      p.innerText = letter.letter;
      var image = document.createElement('img');
      image.src = letter.img;
      var div = document.createElement('div');

      div.appendChild(image);
      div.appendChild(p);
      list.appendChild(div);
    })
  }

}

module.exports = HieroglyphView;