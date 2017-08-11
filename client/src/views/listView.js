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
      var li1 = document.createElement('li');
      li1.innerText = item.godsOf;
      var li2 = document.createElement('li');
      li2.appendChild(image);     
      ul.appendChild(li);
      ul.appendChild(li2);
      ul.appendChild(li3);
    })
  }
}

module.exports = ListView;