var HieroglyphView = function(hieroglyph){
  this.render(hieroglyph);
}

HieroglyphView.prototype = {
  render: function(hieroglyph){
    var heading = document.getElementById('hieroglyph_info');

    var p1 = document.createElement('p');
    p1.innerText = "Although hieroglyphics are Egyptian, the word hieroglyphics is Greek. “Hiero” means “holy” and “glyphics” means “marks” or “writings” – so the word means “holy writings“. The only reason that hisortians are able to understand hieroglyphics is a special record called the Rosetta Stone that was found in 1799.";
    heading.appendChild(p1);
    var p2 = document.createElement('p');
    p2.innerText = "The images below show hieroglyphics for the english alphabet. If you hover your mouse over the images it will show you what letter it matches.";
    heading.appendChild(p2);


    hieroglyph.forEach( function(letter){
      var flipContainer = document.getElementById("flip-container");
      var list = document.createElement('div');
      list.classList = "flipper";
      list.id = "flipper";
      var letterDiv = document.createElement('div');
      letterDiv.classList = "back";
      var letterImage = document.createElement('img');
      letterImage.src = letter.letterImg;
      var imageDiv = document.createElement('div');
      imageDiv.classList = "front";
      var image = document.createElement('img');
      image.src = letter.img;
      letterDiv.appendChild(letterImage);
      imageDiv.appendChild(image);
      list.appendChild(imageDiv);
      list.appendChild(letterDiv);
      flipContainer.appendChild(list);
    });
    
    var list = document.getElementById('hieroglyph_quiz');
    var decode = document.createElement('h1');
    decode.innerText = "Decode the hieroglyphs";
    decode.className = "heading";
    list.appendChild(decode);
    var para = document.createElement('p');
    para.innerText = "Below are some words that have been translate into hieroglyphics, can you use the symbols above to decipher them?";
    list.appendChild(para);

    var makeHieroglyphs = function(array, post){
      console.log(array);
      var div = document.createElement('div');
      array.forEach(function(number){
        if(number === " "){
          var space = document.createElement('div');
          space.innerText = " ";
          div.appendChild(space);
        } else {
        var image = document.createElement('img');
        image.src = hieroglyph[number].img;
        div.appendChild(image);
      }
      })
      post.appendChild(div);
    }

    var createArray = function(words) {
      characters = [];
      words = words.toLowerCase();
      characters = words.split('');
      array = characters.map(function(letter){
        if(letter.charCodeAt(0) === 32){
          return " ";
        } else {
          return letter.charCodeAt(0) - 97;
        }
      });
      return array;
    };

    var translate = document.getElementById('translate');
    var more = document.createElement('p');
    more.innerText = "Type a word in the box below and it will be translated into hieroglyphics for you."
    translate.appendChild(more);

    var submit = document.getElementById('conversion');
    submit.addEventListener('submit', function(event){
      event.preventDefault();
      var input = document.getElementById('list-container');
      while(input.firstChild){
        input.removeChild(input.firstChild);
      }
      var word = this.word.value.toString();
      characters = createArray(word);

      makeHieroglyphs(characters, input);
    });
    
    makeHieroglyphs([7, 4, 11, 11, 14], list); //'hello'
    makeHieroglyphs([2, 14, 3, 4], list); //'code'
    makeHieroglyphs([7, 8, 4, 17, 14, 6, 11, 24, 15, 7, 8, 2, 18], list); //'hieroglyphics'
    makeHieroglyphs([15, 24, 17, 0, 12, 8, 3, 18], list); //'pyramids'
    makeHieroglyphs([13, 8, 11, 4], list); //'nile'
    makeHieroglyphs([18, 19, 0, 17, 6, 0, 19, 4 ], list); //'stargate'
  }

}

module.exports = HieroglyphView;