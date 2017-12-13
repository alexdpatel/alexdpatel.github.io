let angle = 0;
let w;
let magicangle;
let maxH;
let minH;
let maxD;

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
    // pointLight(255, 255, 255, 0, 0, 0)
    // pointLight(0, 43, 255, 100, 100, 100)
    // pointLight(0, 255, 43, -100, 0, -100)
    // directionalLight(0, 0, 255, -100, 0, -100)
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

            normalMaterial()
            // ambientMaterial(255, 255, 255);
            translate(x - width / 2, 0, z - height / 2);
            box(w, h, w)
            pop();
        }
    }
    angle -= .1
}

function dist2(x1, y1, x2, y2)
{
    return (pow((x1 - x2), 2) + pow((y1 - y2), 2))
}