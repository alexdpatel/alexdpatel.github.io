let x = 0;
let y = 0;
let spacing = 100;

function setup()
{
    createCanvas(screen.width, screen.height);
    background(0, 0, 255);
}

function draw()
{
    stroke(255, 255, 255);

    if (random(1) < 0.8)
    {
        fowardSlash(x, y)
    }
    else
    {
        backSlash(x, y)
    }
    x = x + spacing;
    if (x > width)
    {
        x = 0;
        y = y + spacing;
    }

}

function fowardSlash(x, y)
{
    strokeWeight(30)
    line(x, y, x + spacing, y + spacing);

}

function backSlash(x, y)
{
    strokeWeight(30)
    line(x, y + spacing, x + spacing, y);
}