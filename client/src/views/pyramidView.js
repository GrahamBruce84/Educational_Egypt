var PyramidView = function(items) {
  this.render(items);
};

PyramidView.prototype = {
  render: function(items) {
    items.forEach(function(items) {
        var page = document.getElementById('pyramid-page');

        var pic = document.createElement("img");
        pic.src = items.image;

        var info = document.createElement("p");
        info.innerText = items.inform;
      

      page.appendChild(pic);
      page.appendChild(info);
    })
   
}
}

module.exports = PyramidView;