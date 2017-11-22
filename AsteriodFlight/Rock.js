function Rock(height, width)
{
    var edges = 60;
    var x = random(0, 890);
    var y = random(-500, -50);

    var r = random(20, 40);

    var position = new p5.Vector(x, y);
    var velocity = new p5.Vector(0, 0);
    var acceleration = new p5.Vector(0, random(.001, .1))

    var Red = random(100, 144)
    var g = random(20, 60)
    var b = random(0, 30)

    var v = [];

    for (var i = 0; i < edges; i++)
    {
        v.push(new p5.Vector(random(-5, 5), random(-5, 5)))
    }

    this.show = function()
    {
        stroke(Red, g, b)
        fill(Red, g, b)
        //fill(122, 42, 13)
        beginShape()
        for (var i = 0; i < edges; i++)
        {
            vertex(position.x + r * cos(i) + v[i].x, position.y + r * sin(i) + v[i].y)
        }
        endShape()
    }

    this.update = function()
    {
        position = position.add(velocity);
        velocity = velocity.add(acceleration);
        this.show();
    }

    this.getX = function()
    {
        return position.x
    }

    this.getY = function()
    {
        return position.y
    }

    this.reset = function()
    {
        position = new p5.Vector(random(0, 890), random(-500, -50));
        velocity = new p5.Vector(0, 0);
    }

    this.getR = function()
    {
        return r
    }
}
