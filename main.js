function preload()
{

}
function setup()
{
    canvas = createCanvas(800, 700);
    canvas.position(150 ,200);
    video = createCapture(VIDEO);
    video.hide();
}
var shutter = new Audio();
shutter.autoplay = true;
shutter.src = "camera-shutter.mp3";
function take_snapshot()
{
    shutter.play();
    save('p5-project.png');
}
function draw()
{
    image(video, 250, 200, 300,300);
    fill("red");
    circle(100, 100, 100);
    fill("red");
    circle(700, 100, 100);
    fill("red");
    circle(100, 600, 100);
    fill("red");
    circle(700, 600, 100);


    fill("green");
    rect(150, 90, 500, 20);
    fill("green");
    rect(150, 590, 500, 20);
    fill("green");
    rect(90, 150, 20, 400);
    fill("green");
    rect(690, 150, 20, 400);
}