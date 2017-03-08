

function draw() {

    // figure out the height the user typed
    heightStr = document.getElementById("height").value
    symbolStr = document.getElementById("symbol").value

    height = parseInt(heightStr);

    // draw pyramid with that height
    drawPyramid(height, symbolStr);
}


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height, symbolStr) {

     // first, clear the old content
     document.getElementById("pyramid").innerHTML = "";

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += " ";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += symbolStr;
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("pre");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
