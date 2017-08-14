var GodView = function(god){
  this.render(god);
}

GodView.prototype = {
  render: function(god){
    console.log(god);
    god.forEach( function(god){
      var div = document.createElement('div');
      div.classList = "godItem";
      var list = document.getElementById('gods_list');
      var p = document.createElement('p');
      p.innerText = god.name + " " + god.godOf;
      p.classList = "god__description";
      var image = document.createElement('img');
      image.src = god.img;
      image.classList = "god__wrap";
    

      div.addEventListener('mousedown', function(){
        p.classList.add('titleShow');
      })

      div.addEventListener('mouseup', function(){
        p.classList.remove('titleShow');
      });
            
      div.appendChild(image);
      div.appendChild(p);
      list.appendChild(div);
    })
  }

}

module.exports = GodView;