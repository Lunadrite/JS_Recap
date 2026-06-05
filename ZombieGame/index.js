let canvas = document.getElementById("gameCanvas")

// Drawing onto the canvas with props
let context = canvas.getContext("2d");

// Setting window height
var window_height = window.innerHeight;
var window_width = window.innerWidth;
canvas.width = window_width;
canvas.height = window_height;
// Canvas Background color
canvas.style.backgroundColor = "#1c1c1c";

// Player class

class Player{
    constructor(xpos, ypos,scalex,scaley,color){
        // Setting contructor var into class
        this.xpos = xpos;
        this.ypos = ypos;
        this.scalex = scalex;
        this.scaley = scaley;
        this.color = color;
    }
    draw(context){
        context.beginPath();
        context.fillRect(this.xpos, this.ypos,this.scalex,this.scaley)
        context.closePath();
        
    }
}
let mainPlayer = new Player(0,0,100,100,"green");

mainPlayer.draw(context);