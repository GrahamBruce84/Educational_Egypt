var GodView = function(god){
  this.render(god);
}

GodView.prototype = {
  render: function(god){
    console.log(god);
    god.forEach( function(god){
      var list = document.getElementById('gods_list');
      var p = document.createElement('p');
      p.innerText = god.name + " " + god.godOf;
      p.classList = "img__description";
      var image = document.createElement('img');
      image.src = god.img;
      image.classList = "img__wrap";
      var div = document.createElement('div');

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
  }

}

module.exports = GodView;