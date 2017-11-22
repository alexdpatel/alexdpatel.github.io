function Particle(x, y, r, g, b, aD, acceleration)
{
    this.p = new p5.Vector(x, y)
    this.radius = random(20, 70)
    this.velocity = new p5.Vector(random(-2, 2), random(-8, 0))
    this.acceleration = acceleration
    this.alpha = 255
    this.alphaDecay = aD
    this.alive = true
    this.r = r
    this.g = g
    this.b = b

    this.show = function()
    {
        noStroke()
        fill(this.r, this.g, this.b, this.alpha)
        ellipse(this.p.x, this.p.y, this.radius)
    }

    this.update = function()
    {
        this.velocity.x += this.acceleration.x
        this.velocity.y += this.acceleration.y
        this.p.x += this.velocity.x
        this.p.y += this.velocity.y
        this.alpha -= this.alphaDecay

        if (this.alpha < 0)
        {
            this.alive = false
        }
    }
}
