var GodView = function(god){
  this.render(god);
}

GodView.prototype = {
  render: function(god){
    console.log(god);

    var list = document.getElementById('gods_list');
    var para = document.createElement('p');
    para.innerText = "Egyptians worshipped many gods and goddesses, far too many to count. Some of them looked like humans, others were part human and part animal and there were even some that looked just like animals."
    var div = document.createElement('div');
    list.appendChild(para);
    list.appendChild(div);


    god.forEach( function(god){
      var div = document.createElement('div');
      div.classList = "godItem";
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