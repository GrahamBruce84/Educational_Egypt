var GodView = function(god){
  this.render(god);
}

GodView.prototype = {
  render: function(god){
    console.log(god);

    var list = document.getElementById('gods_list');
    var para1 = document.createElement('p');
    para1.innerText = "Egyptians worshipped many gods and goddesses, far too many to count. Some of them looked like humans, others were part human and part animal and there were even some that looked just like animals."
    list.appendChild(para1);
    var para2 = document.createElement('p');
    para2.innerText = "Below are some of the more important gods and goddesses. If you click and hold on the images you can find out their name as well as what they were known for."
    list.appendChild(para2);


    god.forEach( function(god){
      var div = document.createElement('div');
      div.classList = "godItem";
      var p = document.createElement('p');
      p.innerText = god.name + "\n" + god.godOf + "\n" + god.info;
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