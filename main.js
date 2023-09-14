
function setup()
{
video = createCapture(VIDEO);
video.size(550, 550);

canvas = createCanvas(550, 500);
canvas.position(560, 80);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses()
{
    if(results.length > 0 )
    {
        console.log(results);
    }
}

function modelLoaded()
{
    console.log('Modal Loaded!');
}

function draw()
{
    background('#969A97');
}

