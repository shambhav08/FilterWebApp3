noseX = 0;
noseY = 0;

function preload()
{
    moustache = loadImage('https://i.postimg.cc/MpG3mxZ6/moustache3.png');
}

function setup()
{
    canvas = createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-30;
        noseY = results[0].pose.nose.y-7;
    }
}

function draw()
{
    image(video, 0, 0, 350, 300);
    image(moustache, noseX, noseY, 60, 40);
}

function take_snapshot()
{
    save('MyMoustacheFilterImage.png');
}