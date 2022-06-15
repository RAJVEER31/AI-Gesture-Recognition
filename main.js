noseX = 0;
noseY = 0;
left_wrist_X = 0;
right_wrist_X = 0;
diffrence = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("grey");
    fill("cyan");
    stroke("black");
    square(noseX, noseY, diffrence);
}

function modelLoded() {
    console.log("PoseNet Is Initialised !");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        left_wrist_X = results[0].pose.leftWrist.x;
        right_wrist_X = results[0].pose.rightWrist.x;
        diffrence = floor(left_wrist_X - right_wrist_X);
    }
}