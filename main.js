function preload(){

}
function setup(){
canvas=createCanvas(400,400)
canvas.center()
video=createCapture(VIDEO)
video.size(400,400)
video.hide()
poseNet=ml5.poseNet(video,modelLoad)
poseNet.on("pose",gotPose)
}
function draw(){
image(video,0,0,400,400)
}
function takeSnapshot(){
  save("minha_foto.png")
}
function modelLoad(){
  console.log("modelLoad")
}
function gotPose(results){
console.log(results)
}