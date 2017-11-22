var slider;
var rSlider, gSlider, bSlider, radiusSlider, fpsSlider;

var dx = 0;

function setup()
{
    createCanvas(600, 600);

    slider = createSlider(0, 2 * PI, 0, .01);
    slider.position(225, 550);

    rSlider = createSlider(0, 255, 100);
    rSlider.position(620, 20);

    gSlider = createSlider(0, 255, 0);
    gSlider.position(620, 50);

    bSlider = createSlider(0, 255, 255);
    bSlider.position(620, 80);

    radiusSlider = createSlider(0, width / 2, width / 4)
    radiusSlider.position(60, 50)

    fpsSlider = createSlider(1, 60, 120)
    radiusSlider.position(120, 50)
}

function draw()
{
    // if (keyIsDown(80))
    //     wait(50)
    frameRate(fpsSlider.value())
    background(255);
    textSize(32);
    fill(rSlider.value(), gSlider.value(), bSlider.value());
    text(slider.value(), 250, 590);
    var DXS = slider.value();

    translate(width / 2, height / 2);

    stroke(rSlider.value(), gSlider.value(), bSlider.value());
    noFill();
    beginShape();
    for (var i = 0; i < 2 * PI; i += .01)
    {
        var offX = cos(dx);
        var offY = sin(dx);
        var r = radiusSlider.value();
        var x = r * sin(i) + map(offX, -1, 1, -10, 10);
        var y = r * cos(i) + map(offY, -1, 1, -10, 10);
        vertex(x, y);
        dx += DXS;
    }
    endShape();
    dx += PI / 18;
}

function wait(ms)
{
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms)
    {
        end = new Date().getTime();
    }
}
