var ListView = function(listItems){
  this.render(listItems);
}

ListView.prototype = {
  render: function(listItems){
    console.log(listItems);
    listItems.forEach( function(item){
      var ul = document.getElementById('gods_list');
      var li = document.createElement('li');
      li.innerText = item.name;
      var image = document.createElement('img');
      image.src = item.img;
      image.style.height = '200px';
      var li1 = document.createElement('li');
      li1.innerText = item.godOf;
      var li2 = document.createElement('li');
      li2.appendChild(image);     
      ul.appendChild(li);
      ul.appendChild(li1);
      ul.appendChild(li2);
    })
  }
}

module.exports = ListView;