var Stars = [];
var rocks = [];
var laserBeams = []

var difficulty = 7; // Change this number for amount of asteroids per cycle
var ship;

var score = 0;

function setup()
{
    createCanvas(900, 700);
    background(0, 0, 0);

    ship = new p5.Vector(mouseX, height);

    for (var i = 0; i < 150; i++)
    {
        Stars.push(new Star(width, height));
    }

    for (var i = 0; i < difficulty; i++)
    {
        rocks.push(new Rock(width, height));
    }
}

function draw()
{
    //console.log(frameRate());
    background(0, 0, 0);
    textSize(20)
    text("Score: " + score, width - 100, 50)

    strokeWeight(1);
    stroke(209, 72, 68)
    fill(209, 72, 68)
    triangle(ship.x - 20, ship.y - 20, ship.x + 20, ship.y - 20, ship.x, ship.y - 40)

    rectMode(CENTER);
    fill(255, 255, 255)
    rect(ship.x, ship.y, 60, 50, 50)

    if (mouseX < width && mouseX > 0)
    {
        ship.x = mouseX;
    }

    for (var i = 0; i < Stars.length; i++)
    {
        Stars[i].update();
    }

    for (var i = 0; i < rocks.length; i++)
    {
        rocks[i].update();
        if (dist(rocks[i].getX(), rocks[i].getY(), ship.x, ship.y) < rocks[i].getR() + 30)
        {
            Stars = [];
            rocks = [];
            laserBeams = []

            difficulty = 3;

            score = 0;
            setup();
        }
        else if (rocks[i].getY() > height)
        {
            rocks[i] = new Rock(width, height);
            if (score > 0)
            {
                score--;
            }
        }

    }

    for (var i = 0; i < laserBeams.length; i++)
    {
        laserBeams[i].update();
    }

    for (var i = 0; i < laserBeams.length; i++)
    {
        if (laserBeams[i].isValid())
        {
            for (var j = 0; j < rocks.length; j++)
            {
                if (dist(rocks[j].getX(), rocks[j].getY(), laserBeams[i].getX(), laserBeams[i].getY()) < 25 + 5)
                {
                    laserBeams[i].setValid(false);
                    rocks[j] = new Rock(width, height)
                    score++;
                }
            }
        }
    }

}

function keyPressed()
{
    laserBeams.push(new laser(ship.x, ship.y - 40))
}
