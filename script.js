const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //canvas api (2d) added creating ctx
canvas.width = window.innerWidth; //fills entire browser
canvas.height = window.innerHeight;

let number = 0;
let scale = 10;




// rectangle x , y , width, height
// ctx.fillRect(100, 300, 300, 100);


//let vs const here bc we want size to change, const doesn't allow change, let does.
// let size = 0 -- creating this variable to change the size of circle and adding size few lines down
/* these next three variables are place into the drawFlower function
let positionX = canvas.width/2 //centering objcet
let positionY = canvas.height/2
let angle = 0; */

hue = Math.random() * 360;

function drawFlower(){
    let angle = number * 14;
    let radius = scale * Math.sqrt(number);
    //needs to be after the radius 
    let positionX = radius * Math.sin(angle) + canvas.width/2;  
    let positionY = radius * Math.cos(angle) + canvas.height/2;

    ctx.fillStyle = 'hsl(' + hue + ', 100% , 50%)'; //color of circle
    ctx.strokeStyle = 'violet'; //color of circle's border
    ctx.lineWidth = 5; //circle border's line width
    ctx.beginPath(); //start drawing
    // arc - used to draw circle (x, y, radius, start angle, end angle, *optional*: counterclock)
    ctx.arc(positionX, positionY, 20, 0, Math.PI * 2);
    ctx.closePath(); //end the drawing
    ctx.fill(); //fill path with color
    ctx.stroke(); //highlights the circular "PATH" with a border

    number++;

    hue+= 0.5;

}



function animate() {
    // draw each frame

    //clears the animation frame left overs to prevent things like leaving trails etc
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    // size += 0.05; -- increase size variable to make circle appear to grow
   /*  these are replaced above
    positionX += 10 * Math.sin(angle); //creates a -1 +1 (or whatever number put in, bigger number, bigger movement) sin-wave movement
    positionY += 10 * Math.cos(angle); //cos is cosin - returns opposite value from sin //if you give this a sin value as well it will be stuck in place, kind of
    angle += .1; //changes the radius of the moving circle, increase value makes smaller circles
    */
    drawFlower();



   
    //built in function , calls any function as an argument 
    requestAnimationFrame(animate); 
}
animate(); // calling the function
