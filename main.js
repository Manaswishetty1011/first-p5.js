function preload(){

}
function setup(){
   canvas= createCanvas(280,280);
    canvas.center();
    background("white");
    video= createCapture (VIDEO);
    video.size(200,200)
    video.hide();
}
function draw(){
    image(video,40,40,200,200) 
    circle(20,20,30)
    circle(260,20,30)
    circle(260,260,30)
    circle(20,260,30)
    fill(3,38,103)
    stroke(3,38,103)
}
function take_snapshot(){       
    save("image.jpeg")
    }