function laser(x, y)
{
    var position = new p5.Vector(x, y);
    var velocity = new p5.Vector(0, -12.5);

    var valid = true;

    this.show = function()
    {
        stroke(78, 238, 30);
        strokeWeight(10);
        point(position.x, position.y);
    }

    this.update = function()
    {
        if (valid)
        {
            position = position.add(velocity);
            this.show();

            if (position.y < 0)
            {
                valid = false;
            }
        }
    }

    this.isValid = function()
    {
        return valid;
    }

    this.getX = function()
    {
        return position.x
    }

    this.getY = function()
    {
        return position.y
    }

    this.setValid = function(boolean)
    {
        valid = boolean;
    }
}
