

function drawPyramid(height, symbol) {
    for (var row = 0; row < height; row++){

      // determines number of bricks and spaces
      var numBricks = row + 2;
      var numSpaces = height - row - 1;

      // builds a string for each row
      var rowStr = "";
      for (var i = 0; i < numSpaces; i++){
        rowStr += " ";
      }
      for (var i = 0; i < numBricks; i++){
        rowStr += "symbol";
      }

    // gets the pyramid element, creates a <p> element with rowStr inside,
    // appends the element to the pyramid element
    var target = document.getElementById("pyramid")
    rowElem = document.createElement("p")
    rowElem.innerHTML = rowSTR;
    target.appendchild(rowElem)

    }
}
