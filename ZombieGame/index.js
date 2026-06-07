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
        context.fillStyle = this.color;
        context.fillRect(this.xpos, this.ypos,this.scalex,this.scaley)
        context.closePath();
        
    }
    move(y,x){
        if ((this.xpos - x) >= 0) {
            this.xpos += x;
        }


        if ((this.ypos - y) >= 0) {
            this.ypos += y;
        }

    }
}
// Default player spawn:
let mainPlayer = new Player(100,100,100,100,"green");
mainPlayer.draw(context);


// Player Movement Script
document.addEventListener("keydown", function(event){

    if(event.key === "a"){
        mainPlayer.move(0, -10);
    }
    if(event.key === "w"){
        mainPlayer.move(-10, 0);
    }
    if(event.key === "d"){
        mainPlayer.move(0, 10);
    }
    if(event.key === "s"){
        mainPlayer.move(10, 0);
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    mainPlayer.draw(context);

});