img="";
status="";
function preload() {
img=loadImage('dog_cat.jpg');
}
function setup() {
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status : Detecting Objects";
}
function modelLoaded() {
console.log("modelLoaded");
status=true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
if(error) {
console.log(error);
}
console.log(results);
}
function draw() {
image(img,0,0,640,420);
//fill("#D4AF37");
//text("dog", 45,75);
//noFill();
//stroke("#D4AF37");
//rect(30,60,450,350);
//fill("#D4AF37");
//text("cat", 320,120);
//noFill();
//stroke("#D4AF37");
//rect(300,90,270,320);
}