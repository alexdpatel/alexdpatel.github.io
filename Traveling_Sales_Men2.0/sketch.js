let cities = []; // array of postion vectors
let Stops = 20;

let Population = [];
let IntialPop = 5000;

let shortest = 0;
let bestOrder = [];

let fitness = [];
let choices = []; // all possible cities 1-n
let genCount = 0;

function setup()
{
    createCanvas(800, 800);
    for (let i = 0; i < Stops; i++)
    {
        cities.push(new p5.Vector(random(50, width - 50), random(50, height - 50)))
        choices.push(i)
    }

    for (let i = 0; i < IntialPop; i++)
    {
        choices = shuffle(choices)
        Population.push(choices)
    }
    bestOrder = Population[0];
    shortest = width * Stops;
    background(0, 0, 0)
}

function draw()
{


    for (let i = 0; i < Population.length; i++)
    {
        let travelDist = dSum(Population[i]);
        if (travelDist < shortest)
        {
            stroke(255, 30, 80)
            strokeWeight(5)
            ConnectinOrder(bestOrder)
            //console.log("Found new shortest Distance");
            shortest = travelDist;
            bestOrder = deepCopy1d(Population[i]);
            //console.log(deepCopy1d(bestOrder))
        }
        fitness[i] = (getfitness(shortest / travelDist))

    }

    stroke(60, 255, 30)
    strokeWeight(3)
    ConnectinOrder(bestOrder)
    drawCities()

    //console.log("intializing new pop!");
    let nextGen = []

    while (nextGen.length < IntialPop)
    {
        let fitCopy = deepCopy1d(fitness)
        fitness = removeBelowAverage(fitCopy)
        for (let i = 0; i < fitness.length; i++)
        {
            if (fitness[i] != 0 && nextGen.length < IntialPop)
            {
                let bby = deepCopy1d(Population[i])

                for (var j = 0; j < 5; j++)
                {
                    if (random() < .5)
                    {
                        bby = Mutate(deepCopy1d(bby))
                    }
                }

                if (random() < .2)
                    bby = shuffle(bby)

                nextGen.push(bby)

            }
        }
    }
    Population = deepCopy2d(nextGen)
    nextGen = []
    genCount += 1
    // console.log("New pop created!" + " Gen Count: " + genCount);
    // console.log("Average Fit " + averageFitness(deepCopy1d(fitness)));
    // console.log("Fitness: " + deepCopy1d(fitness));
}


function deepCopy1d(ar)
{
    let temp = []
    for (el of ar)
    {
        temp.push(el)
    }
    return temp
}

function deepCopy2d(ar)
{
    let temp = []
    for (el of ar)
    {
        temp.push(deepCopy1d(el))
    }
    return temp
}

function averageFitness(fitn)
{
    let sum = 0
    let count = 0
    for (fit of fitn)
    {
        sum += fit
        if (fit > 0)
            count += 1
    }
    return (sum / count)
}

function removeBelowAverage(fitn)
{
    let temp = []
    let average = averageFitness(fitn)
    if (average > 90)
    {
        average = 90
    }
    for (fit of fitn)
    {
        if (fit < average)
        {
            temp.push(0)
        }
        else
        {
            temp.push(fit)
        }
    }
    return temp
}

function getfitness(num)
{
    return (num * 100) | 0
}

function Mutate(order)
{
    let a = random(choices)
    let b = random(choices)

    let temp = order[a]
    order[a] = order[b]
    order[b] = temp

    return order;
}

function MutateFirst(order)
{
    let a = 0
    let b = random(choices)

    let temp = order[a]
    order[a] = order[b]
    order[b] = temp

    return order;
}

function MutateLast(order)
{
    let a = random(choices)
    let b = 0

    let temp = order[a]
    order[a] = order[b]
    order[b] = temp

    return order;
}

function drawCities()
{
    stroke(255, 255, 255)
    strokeWeight(10)
    console.log(cities);
    for (let i = 0; i < cities.length; i++)
    {
        point(cities[i].x, cities[i].y)
    }
}

function ConnectinOrder(order)
{
    for (let i = 0; i < order.length - 1; i++)
    {
        line(cities[order[i]].x, cities[order[i]].y, cities[order[i + 1]].x, cities[order[i + 1]].y)
    }
    line(cities[order[0]].x, cities[order[0]].y, cities[order[order.length - 1]].x, cities[order[order.length - 1]].y)
}

function dSum(order)
{
    let sum = 0;

    for (let i = 0; i < order.length - 1; i++)
    {
        let city = order[i];
        let NextCity = order[i + 1];

        sum += dist(cities[city].x, cities[city].y, cities[NextCity].x, cities[NextCity].y)
    }

    sum += dist(cities[order[0]].x, cities[order[0]].y, cities[order[order.length - 1]].x, cities[order[order.length - 1]].y)
    return sum;
}

function dist(x1, y1, x2, y2)
{
    let dist = (Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}