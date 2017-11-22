var z
var deltay
var deltax
var start
var r = 0
var g = 83
var b = 155

var start = -1 * Math.sqrt(3 / 4)
var end = Math.sqrt(3 / 4)
var maxDistance = Math.sqrt(Math.pow(screen.width, 2) + Math.pow(screen.height, 2))

function setup()
{
    createCanvas(screen.width, screen.height) //(1400, 750)
    background(r, g, b)
    z = 0;
    start = random(0, 9)
    deltay = start
    deltax = start
    //translate(width / 2, height / 2)
}

function draw()
{
    //frameRate(20)
    translate(width / 12, height / 2)
    background(r, g, b)
    strokeWeight(2)
    stroke(0, 0, 0)

    deltax = start * .000000001
    for (var x = 0; x < width; x += width / 40)
    {
        deltay = start * .000000001
        for (var y = 0; y < height; y += height / 40)
        {
            var distToCenter = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
            fill(0, 0, 0) // map(distToCenter, 0, maxDistance, 255, 0))
            //rectMode(CENTER)
            rotate(map(noise(deltax, deltay, z), start, end, -2 * PI, 2 * PI))
            //rotate((noise(deltax, deltay, z)))
            //rect(x, y, 1, 10, 20)
            var radius = map(distToCenter, 0, maxDistance, 5, 30)
            ellipse(x, y, radius, radius)
            deltay += .00000005
        }
        deltax += .00000005
    }
    z += .00001
    //console.log(frameRate());
}

function mouseClicked()
{
    r = random(0, 255)
    g = random(0, 255)
    b = random(0, 255)
    z += .001;
}
//range -root 3/4 to root 3/4
