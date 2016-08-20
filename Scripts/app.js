/**
 * FileName : app.js
 * 
 * @author Kenneth Bato
 * @date August 19, 2016
 * Student ID : 300448795
 * website : http://comp125-assignment4-300448795.azurewebsites.net
 * @description the main JavaScript file for banner ad
 */

var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    var width;
    var length;
    var txtLabel;
    var index = 1;
    //data string array 
    var dataArray = [];
    dataArray[0] = "See the new Interior!";
    dataArray[1] = "The New Design";
    dataArray[2] = "Click to See Renderings";
    var background;
    var stopTick = true;

    // function to set canvas boundary
    function canvasBoundary(axis, boundary) {
        if (axis >= boundary) {
            axis = boundary;
        }
        if (axis <= 0) {
            axis = 0;
        }
        return axis;
    }

    /*   
    * Initialize the canvas setting
    * 
    * @function init
    * @returns {void}
    */
    function init() {
        canvas = document.getElementById("canvas");
        //get canvas size
        width = canvas.width;
        length = canvas.length;
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        //click event listener to stop Ticker update and open corresponding url
        canvas.addEventListener("click", function () {
            if (stopTick == true){
                stopTick = false;
            } else {
                stopTick = true;
            }
            window.open("http://comp125-assignment3-300448795.azurewebsites.net/Projects.html") 
        });
        main();
    }
    /*   
    * Initialize animation loop
    * 
    * @function gameLoop
    * @returns {void}
    */
    function gameLoop() {
        
        if (txtLabel.x >= -200 ){
            txtLabel.x -= 2;
        }
        else {
            txtLabel.x = 350;
            if (index == dataArray.length) {
                index = 0;
            }
            else {
                index++;
            }
            txtLabel.text = dataArray[index];
        }
        if (stopTick == true){
            stage.update();
        }
    }
   /*   
    * Function to create objects
    * 
    * @function main
    * @returns {void}
    */

    function main() {
        background = new createjs.Bitmap("../Assets/images/Bakery.jpg");
        stage.addChild(background);
        background.scaleY = 0.12;
        background.scaleX = 0.12;
        background.y = -30;
        txtLabel = new createjs.Text(dataArray[0], "20px Century Gothic", "white");
        txtLabel.x = 350;
        stage.addChild(txtLabel);
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map