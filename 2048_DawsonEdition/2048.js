var Board

var Tile1
var Tile2
var Tile3
var Tile4
var Tile5
var Tile6
var Tile7
var Tile8
var Tile9
var Tile10
var Tile11
var Tile12
var Tile13
var Tile14
var Tile15
var Tile16

var lost = false;
var fontSize = 56;
var score = 0;
var boardSize = 801;
var w;

var direction;

var img2;
var img4;
var img8;
var img16;
var img32;
var img64;
var img128;
var img256;
var img512;
var img1024;
var img2048;
var img4096;
var img8192;

function preload()
{
    img2 = loadImage("assets/D2.png");
    img4 = loadImage("assets/D4.png");
    img8 = loadImage("assets/D8.png");
    img16 = loadImage("assets/D16.png");
    img32 = loadImage("assets/D32.png");
    img64 = loadImage("assets/D64.png");
    img128 = loadImage("assets/D128.png");
    img256 = loadImage("assets/D256.png");
    img512 = loadImage("assets/D512.png");
    img1024 = loadImage("assets/D1024.png");
    img2048 = loadImage("assets/D2048.png");
    img4096 = loadImage("assets/D4096.png");
    img8192 = loadImage("assets/D8192.png");
}

function setup()
{
    createCanvas(boardSize * 2, boardSize * 2)

    w = floor(boardSize / 4)

    Tile1 = new Tile(0, 0)
    Tile2 = new Tile(0, 1)
    Tile3 = new Tile(0, 2)
    Tile4 = new Tile(0, 3)
    Tile5 = new Tile(1, 0)
    Tile6 = new Tile(1, 1)
    Tile7 = new Tile(1, 2)
    Tile8 = new Tile(1, 3)
    Tile9 = new Tile(2, 0)
    Tile10 = new Tile(2, 1)
    Tile11 = new Tile(2, 2)
    Tile12 = new Tile(2, 3)
    Tile13 = new Tile(3, 0)
    Tile14 = new Tile(3, 1)
    Tile15 = new Tile(3, 2)
    Tile16 = new Tile(3, 3)

    Board = [
        [Tile1, Tile2, Tile3, Tile4],
        [Tile5, Tile6, Tile7, Tile8],
        [Tile9, Tile10, Tile11, Tile12],
        [Tile13, Tile14, Tile15, Tile16]
    ]

    //Move(new p5.Vector(0, 0))
    //console.log(Board)
}

function draw()
{
    background(255, 255, 255)

    stroke(241, 219, 177)
    fill(241, 219, 177)
    rect(0, 0, boardSize, boardSize)

    drawGrid()
    Show(Board)

    stroke(41, 41, 41)
    fill(41, 41, 41)
    textSize(fontSize)
    textAlign(LEFT)
    text("Score: " + score, boardSize + w - 50, w / 2 + fontSize / 2)

    if (lost)
    {
        textAlign(CENTER)
        text("YOU LOSE", boardSize / 2, boardSize / 2)
    }
}

function drawGrid()
{
    for (var r = 0; r < Board.length; r++)
    {
        for (var c = 0; c < Board[0].length; c++)
        {
            stroke(0)
            strokeWeight(1)
            noFill()
            rect(r * w, c * w, w, w)
        }
    }
}


function Show()
{
    fontSize = 56
    stroke(0)
    fill(0)
    textSize(18)

    for (var r = 0; r < Board.length; r++)
    {
        for (var c = 0; c < Board[0].length; c++)
        {
            var temp = Board[r][c].getValue();
            if (temp != 0)
            {
                var size = "" + temp;
                size = size.length;

                textAlign(CENTER)
                drawDawson(temp, r, c)
                text(temp, r * w + w - 40, c * w + w - 50 + fontSize / 2)

            }

        }
    }
}

function drawDawson(num, r, c)
{
    if (num == 2)
    {
        image(img2, r * w, c * w)
    }

    if (num == 4)
    {
        image(img4, r * w, c * w)
    }

    if (num == 8)
    {
        image(img8, r * w, c * w)
    }
    if (num == 16)
    {
        image(img16, r * w, c * w)
    }
    if (num == 32)
    {
        image(img32, r * w, c * w)
    }
    if (num == 64)
    {
        image(img64, r * w, c * w)
    }
    if (num == 128)
    {
        image(img128, r * w, c * w)
    }
    if (num == 256)
    {
        image(img256, r * w, c * w)
    }
    if (num == 512)
    {
        image(img512, r * w, c * w)
    }
    if (num == 1024)
    {
        image(img1024, r * w, c * w)
    }
    if (num == 2048)
    {
        image(img2048, r * w, c * w)
    }
    if (num == 4096)
    {
        image(img4096, r * w, c * w)
    }
    if (num == 8192)
    {
        image(img8192, r * w, c * w)
    }
}

function keyPressed()
{
    if (keyCode == UP_ARROW)
    {
        direction = new p5.Vector(0, -1)
    }
    else if (keyCode == DOWN_ARROW)
    {
        direction = new p5.Vector(0, 1)
    }
    else if (keyCode == LEFT_ARROW)
    {
        direction = new p5.Vector(-1, 0)
    }
    else if (keyCode == RIGHT_ARROW)
    {
        console.log("RIGHT");
        direction = new p5.Vector(1, 0)
    }

    if (!lost)
    {
        Move(direction)
        if (isLost() && noZeros())
            lost = true
    }

    return false; // prevent default
}

function fillTile()
{
    if (!noZeros())
    {
        var fillCount = 0;
        while (fillCount == 0)
        {
            for (var r = 0; r < 4; r++)
            {
                for (var c = 0; c < 4; c++)
                {
                    if (Board[r][c].getValue() == 0)
                    {
                        if (random(1) < .05)
                        {
                            if (random(1) < .1)
                            {
                                Board[r][c].setValue(4)
                            }
                            else
                            {
                                Board[r][c].setValue(2)
                            }
                            fillCount++;
                            return;
                        }
                    }
                }
            }
        }
    }

}

function noZeros()
{
    for (var r = 0; r < 4; r++)
    {
        for (var c = 0; c < 4; c++)
        {
            if (Board[r][c].getValue() == 0)
                return false
        }
    }

    return true
}

function Move(direction)
{
    var RtL = true;
    if (direction.x == -1 || direction.y == -1)
    {
        RtL = false;
    }

    UpdateTilePostion(direction)

    if (RtL)
    {
        for (var r = 3; r >= 0; r--)
        {
            for (var c = 3; c >= 0; c--)
            {
                combineD(direction, r, c)
            }
        }
    }
    else
    {
        for (var r = 0; r < 4; r++)
        {
            for (var c = 0; c < 4; c++)
            {
                combineD(direction, r, c)
            }
        }
    }
    UpdateTilePostion(direction)

    fillTile()
}

function UpdateTilePostion(direction)
{
    for (var k = 0; k < 4; k++)
    {
        for (var r = 0; r < 4; r++)
        {
            for (var c = 0; c < 4; c++)
            {
                shift(direction, r, c)
            }
        }
    }
}

function combineD(direction, r, c)
{
    var i = r + direction.x
    var j = c + direction.y

    if ((i < 4 && i > -1) && (j < 4 && j > -1))
    {
        if (Board[i][j].getValue() == Board[r][c].getValue())
        {

            Board[i][j].doubleValue()
            Board[r][c].setValue(0)
            score += Board[i][j].getValue()
        }
    }
}

function shift(direction, r, c)
{
    while (true)
    {
        var i = r + direction.x
        var j = c + direction.y

        if ((i < 4 && i > -1) && (j < 4 && j > -1)) //&& Board[r][c] != 0)
        {
            if (Board[i][j].getValue() != 0)
            {
                return;
            }

            Board[i][j].setValue(Board[r][c].getValue())
            Board[r][c].setValue(0)

            i += direction.x
            j += direction.y

            r += direction.x
            c += direction.y
        }
        else
        {
            return;
        }

    }
    return;
}

function isLost()
{
    for (var r = 0; r < 4; r++)
    {
        for (var c = 0; c < 4; c++)
        {
            for (var xoff = -1; xoff <= 1; xoff++)
            {
                for (var yoff = -1; yoff <= 1; yoff++)
                {
                    var i = r + xoff
                    var j = c + yoff

                    if ((i < 4 && i > -1) && (j < 4 && j > -1))
                    {
                        if (xoff * xoff + yoff * yoff == 1)
                        {
                            if (Board[r][c].getValue() == Board[i][j].getValue())
                            {
                                return false
                            }
                        }
                    }
                }
            }
        }
    }
    return true
}
