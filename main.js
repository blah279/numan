function setup(){
    video=createCapture(VIDEO);
    video.size(560,500);

    canvas=createCanvas(560,500);
    canvas.position(570,150);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    background('#32a852');
    textSize(difference);
    fill('#F90093');
    text('Nandan',100,100 );
}
function modelLoaded(){
    console.log("Posenet is initialaized");
}
leftX=0;
rightX=0;
difference=0;
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftX=results[0].pose.leftWrist.x;
        rightX=results[0].pose.rightWrist.x;
        difference=leftX-rightX;
        console.log(leftX+rightX+difference);
    }
}