let Particles = []
let x
let y

function setup()
{
    createCanvas(screen.width, screen.height)
}

function draw()
{
    background(0, 0, 0)

    let noGrav = new p5.Vector(0, 0)

    let newP = new Particle(x, y, 240, 110, 30, 6, noGrav)
    Particles.push(newP)
    newP = new Particle(x, y, 230, 130, 50, 3, noGrav)
    Particles.push(newP)
    newP = new Particle(x, y, 41, 41, 41, 1.5, noGrav)
    Particles.push(newP)
    newP = new Particle(x, y, 252, 189, 41, 8, new p5.Vector(random(-.5, .5), .5))
    Particles.push(newP)


    for (var i = Particles.length - 1; i >= 0; i--)
    {
        Particles[i].update()
        Particles[i].show()

        if (!Particles[i].alive)
        {
            Particles.splice(i, 1)
        }
    }
}

function mouseClicked()
{
    x = mouseX
    y = mouseY
}
