//
// intro.js
//



class Ball 
{
    position;
    velocity;
    hue;
    alpha;
    radius;

    constructor() 
    {
        this.position = createVector(mouseX, mouseY);

        this.velocity = createVector(pmouseX, pmouseY);
        this.velocity.sub(this.position);
        this.velocity.mult(.1);

        this.hue = currentHue;
        this.alpha = 255;

        this.radius = 0;
    }

    display()
    {
        noFill();
        stroke(this.hue, 100, 50, this.alpha);
        ellipse(this.position.x, this.position.y, this.radius*2, this.radius*2);
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.alpha--;
        this.radius++;
    }
}

let balls = [];


setup = function() {
    let canvas = createCanvas(400, 400);
    canvas.parent("p5_canvas");
    colorMode(HSB, 100);
}


let currentHue = 50;


draw = function()
{
    background(0);

    for (let b of balls)
        b.display();

    if (++currentHue > 100) currentHue = 0;

    balls.push(new Ball());
    removeDeadBalls();
}


removeDeadBalls = function()
{
    for (let i=balls.length-1; i>=0; i--)
    {
        if (balls[i].alpha <= 0)
            balls.splice(i, 1);
    }
}


