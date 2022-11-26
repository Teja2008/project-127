song1=""
song2=""
function setup(){
    canvas= createCanvas(600,500)
    canvas.center()
    video=createCapture(VIDEO);
    video.hide()
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose', gotPoses)
}
function preload(){
    song1= loadSound("song1.mp3")
    song2= loadSound("song2.mp3")
}
function draw(){
    image(video,0,0,600,500)
    song1.play();
    
}
