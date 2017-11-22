var pos = new p5.Vector(0, 0);
var posRectangle = new p5.Vector(0, 0);
var velocity = new p5.Vector(5, 2);
var r = 255;
var b = 255;
var g = 255;
var count = 0;
var score = 0;
var MAXSPEED = 10;
var temp = 0;

var COMPRectangle = new p5.Vector(0, 0);
var COMPvelocity = new p5.Vector(0, 0);

function setup()
{
    createCanvas(screen.width, screen.height);
    pos.x = width / 2;
    pos.y = height / 2;

    posRectangle.x = 0;
    posRectangle.y = height / 2;

    COMPRectangle.x = width;
    COMPRectangle.y = height / 2;

}

function draw()
{
    background(0);

    colorMode(HSB, 255);
    stroke(r, g, b);
    strokeWeight(20)

    rectMode(CORNER)
    rect(0, 0, width, 2); // wall top
    rect(0, height - 2, width, 2); // wall botom

    COMPRectangle.add(COMPvelocity);

    rectMode(CENTER);
    rect(posRectangle.x, posRectangle.y, 2, 60, 40); //  rectangle
    rect(COMPRectangle.x, COMPRectangle.y, 2, 60, 40); // comp rectangle

    strokeWeight(5);
    text("S   c   o   r   e   :      " + score, width - 170, height - 20)

    stroke(count, count, b);
    count += 1.5;
    if (count >= 255)
    {
        count = 0;
    }

    strokeWeight(15);
    velocity.setMag(MAXSPEED);
    pos.add(velocity);

    point(pos.x, pos.y);

    if (pos.x <= 10 && pos.x > 0)
    {
        if (pos.y <= posRectangle.y + 30 + 10 && pos.y >= posRectangle.y - 30 - 20)
        {
            velocity.x = random(3, 7);
            score++;
            r = count;
            g = count;
        }
    }

    if (pos.x <= width && pos.x > width - 10)
    {
        if (pos.y <= COMPRectangle.y + 30 + 10 && pos.y >= COMPRectangle.y - 30 - 20)
        {
            velocity.x = -random(3, 7);
            r = count;
            g = count;
        }
    }

    if (pos.x <= -4)
    {
        text("Y     O       U          L       O       S       E", width / 2 - 120, height / 2 - 20);
        text("P     L       E       A       S       E          R       E       F       R       E       S       H", width / 2 - 200, height / 2 + 30);

        r = count;
        g = count;

        velocity.x = 0;
        velocity.y = 0;
    }
    else if (pos.x >= width + 4)
    {
        text("Y     O       U          W        I       N", width / 2 - 120, height / 2 - 20);
        text("P     L       E       A       S       E          R       E       F       R       E       S       H", width / 2 - 200, height / 2 + 30);

        r = count;
        g = count;

        velocity.x = 0;
        velocity.y = 0;
    }
    else if (pos.y <= 20)
    {
        velocity.y = random(3, 7);
        r = count;
        g = count;
    }
    else if (pos.y >= height - 20)
    {
        velocity.y = -random(3, 7);
        r = count;
        g = count;
    }

    if (mouseY < height && mouseY > 0)
    {
        posRectangle.y = mouseY;
        //posRectangle.y = pos.y;
    }

    temp = pos.y - COMPRectangle.y;

    if (temp > 20)
    {
        COMPvelocity.y = MAXSPEED - 3;
    }
    else
    {
        COMPvelocity.y = map(temp, 0, 20, 0, MAXSPEED - 5);
    }
}
