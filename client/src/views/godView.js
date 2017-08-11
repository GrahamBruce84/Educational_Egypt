var GodView = function(god){
  this.render(god);
}

GodView.prototype = {
  render: function(god){
    console.log(god);
    god.forEach( function(god){
      var ul = document.getElementById('gods_list');
      var li = document.createElement('li');
      li.innerText = god.name;
      var image = document.createElement('img');
      image.src = god.img;
      image.style.height = '200px';
      var li1 = document.createElement('li');
      li1.innerText = god.godOf;
      var li2 = document.createElement('li');
      li2.appendChild(image);     
      ul.appendChild(li);
      ul.appendChild(li1);
      ul.appendChild(li2);
    })
  }
}

module.exports = GodView;