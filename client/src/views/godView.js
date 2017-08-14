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
      

      image.addEventListener('mouseenter', function(){
        p.classList.add('titleShow');
      })

      image.addEventListener('mouseout', function(){
        p.classList.remove('titleShow');
      });
            
      div.appendChild(image);
      div.appendChild(p);
      list.appendChild(div);
    })
  }

}

module.exports = GodView;