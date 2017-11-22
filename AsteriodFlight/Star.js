function Star(width, height)
{
    var x = random(0, width);
    var y = random(-5000, -50);

    var position = new p5.Vector(x, y);
    var velocity = new p5.Vector(0, 0);
    var acceleration = new p5.Vector(0, random(.01, .35))
    var r = map(acceleration, .01, .35, 3, 6);

    this.show = function()
    {
        stroke(218, 221, 103);
        strokeWeight(r);
        point(position.x, position.y);
    }

    this.update = function()
    {
        position = position.add(velocity);
        velocity = velocity.add(acceleration);
        this.resetPos();
        this.show();
    }

    this.resetPos = function()
    {
        if (position.y > height)
        {
            position.y = y;
            velocity = new p5.Vector(0, 0);
        }
    }
}
