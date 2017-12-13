let angle = 0;
let w;
let magicangle;
let maxH;
let minH;
let maxD;
let angleoffset = 0;

function setup()
{
    // createCanvas(screen.width, screen.height)
    // background(255, 255, 255)
    createCanvas(1050, 1050, WEBGL)
    background(255, 255, 255)
    magicangle = atan(1 / sqrt(2))
    maxD = dist2(0, 0, width / 2, height / 2)
    w = width / 14
    maxH = width / 1.4
    minH = width / 15
}

function draw()
{
    background(0);
    pointLight(255, 255, 255, 0, 0, 0)
    directionalLight(115, 220, 255, 1, 0, 0)
    directionalLight(255, 220, 115, -1, 0, 0)
    directionalLight(41, 41, 41, 0, -1, 0)
    translate(0, width / 10, 0)
    ortho(-width, height, width, -height, 0, width * 2.5)
    rotateX(-QUARTER_PI);
    rotateY(magicangle);
    orbitControl();
    let offset = 0
    for (let z = 0; z < height; z += w)
    {
        for (let x = 0; x < width; x += w)
        {
            push()
            let d = dist2(x, z, width / 2, height / 2)
            offset = map(d, 0, maxD, -PI, PI)
            let a = angle + offset
            let h = floor(map(sin(a), -1, 1, minH, maxH))
            ambientMaterial(255, 255, 255);
            translate(x - width / 2, 0, z - height / 2);
            box(w, h, w)
            pop();
        }
    }

    angleoffset += .008
    angle += cos(angleoffset) / 10

}

function dist2(x1, y1, x2, y2)
{
    return (pow((x1 - x2), 2) + pow((y1 - y2), 2))
}