function Tile(row, col)
{

    if (random(1) < .15)
    {
        this.val = floor(random(1, 3)) * 2 | 0;
    }
    else
    {
        this.val = 0;
    }

    this.row = row;
    this.col = col;

    this.getValue = function()
    {
        return this.val
    }

    this.setValue = function(num)
    {
        this.val = num
    }

    this.doubleValue = function()
    {
        this.val = this.val * 2
    }

    this.reset = function()
    {
        this.val = 0;
    }
}
