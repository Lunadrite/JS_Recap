let canvas = document.getElementById("gameCanvas")

// Drawing onto the canvas with props
let context = canvas.getContext("2d");

// Setting window height
var window_height = window.innerHeight;
var window_width = window.innerWidth;
canvas.width = window_width;
canvas.height = window_height;

// Player class

class player{
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
    }
}
let Player1 = new player;

Player1.draw;