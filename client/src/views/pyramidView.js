var PyramidView = function(items) {
  this.render(items);

};

PyramidView.prototype = {
  render: function(items) {

    items.forEach(function(items) {
      var page = document.getElementById('pyramid-page');

      var pic = document.createElement("img");
      pic.src = items.image;
      pic.className = "pyramidImage";

      var info = document.createElement("p");
      info.innerText = items.inform;
      

      page.appendChild(pic);
      page.appendChild(info);

      var maze = document.getElementById('pyramid-maze');
      var mazeInfo = document.createElement('p');
      mazeInfo.innerText = "Pharaoh's were buried with their greatest treasures which made them a target by thieves. So stop them stealing all that wealth Egyptians would add mazes and traps!"
      var mazeInst = document.createElement('p');
      mazeInst.innerText = "Use W for Up, S for Down, A for Left and D for Right. Can you make your way through the pyramid's maze to get the Pharaoh's treasure, the red dot?"
      maze.appendChild(mazeInfo);
      maze.appendChild(mazeInst);
    })


    var canvas = document.getElementById("mazecanvas");
    var context = canvas.getContext("2d");

    var currRectX = 145;
    var currRectY = 15;
    var mazeWidth = 770;
    var mazeHeight = 556;
    var intervalVar;

    function drawMazeAndRectangle(rectX, rectY) {
      makeWhite(0, 0, canvas.width, canvas.height);
      var mazeImg = new Image();
      mazeImg.onload = function () {
        context.drawImage(mazeImg, 0, 0);
        drawRectangle(rectX, rectY, "#0000FF", false, true);
        context.beginPath();
        context.arc(542, 122, 7, 0, 2 * Math.PI, false);
        context.closePath();
        context.fillStyle = '#f70000';
        context.fill();
      };
      mazeImg.src = "/image/maze.gif";
    }
    function drawRectangle(x, y, style) {
      makeWhite(currRectX, currRectY, 15, 15);
      currRectX = x;
      currRectY = y;
      context.beginPath();
      context.rect(x, y, 15, 15);
      context.closePath();
      context.fillStyle = style;
      context.fill();
    }

    function makeWhite(x, y, w, h) {
      context.beginPath();
      context.rect(x, y, w, h);
      context.closePath();
      context.fillStyle = "white";
      context.fill();
    }

    function moveRect(e) {
      var newX;
      var newY;
      var canMove;
      e = e || window.event;
      switch (e.keyCode) {
        case 38:
        case 87: 
        newX = currRectX;
        newY = currRectY - 5;
        break;
        case 37: 
        case 65: 
        newX = currRectX - 5;
        newY = currRectY;
        break;
        case 40: 
        case 83: 
        newX = currRectX;
        newY = currRectY + 5;
        break;
        case 39: 
        case 68: 
        newX = currRectX + 5;
        newY = currRectY;
        break;
        default: return;
      }
      movingAllowed = canMoveTo(newX, newY);
      if (movingAllowed === 1) { 
        drawRectangle(newX, newY, "#0000FF");
        currRectX = newX;
        currRectY = newY;
      }
      else if (movingAllowed === 2) { 
        clearInterval(intervalVar);
        makeWhite(0, 0, canvas.width, canvas.height);
        context.font = "40px Arial";
        context.fillStyle = "blue";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("Congratulations!", canvas.width / 2, canvas.height / 2);
        window.removeEventListener("keydown", moveRect, true);
      }
    }

    function canMoveTo(destX, destY) {
      var imgData = context.getImageData(destX, destY, 15, 15);
      var data = imgData.data;
      var canMove = 1; 
      if (destX >= 0 && destX <= mazeWidth - 15 && destY >= 0 && destY <= mazeHeight - 15) { 
        for (var i = 0; i < 4 * 15 * 15; i += 4) { 
          if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) { 
            canMove = 0; 
            break;
          }
          else if (data[i] === 0 && data[i + 1] === 255 && data[i + 2] === 0) { 
            canMove = 2; 
            break;
          }
        }
      }
      else {
        canMove = 0;
      }
      return canMove;
    }

    drawMazeAndRectangle(145, 15);
    window.addEventListener("keydown", moveRect, true); 
  }
}

module.exports = PyramidView;