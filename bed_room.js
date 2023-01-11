img = "";

function preload()
{
    img = loadImage('bed_room.png');
}


function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    
}