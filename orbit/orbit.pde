//
// orbit.pde
//


PVector center;
PVector position;
PVector velocity;


void setup()
{
    size(800, 600);

    center = new PVector(width/2, height/2);
    position = new PVector(width/2, height * .25);
    velocity = new PVector(4, 0);
}

void draw()
{
    background(0);

    fill(255, 255, 0);
    ellipse(width/2, height/2, 50, 50);

    fill(255);
    ellipse(position.x, position.y, 20, 20);

    position.add(velocity);

    PVector force = center.copy();
    force.sub(position);
    float r = force.mag();
    force.setMag(5000/r/r);

    velocity.add(force);
}


