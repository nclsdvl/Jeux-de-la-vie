var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width; 
var y = canvas.height; 

// ------> tableau 30 / 30 <-------- //


function drawVertical(x1)
{
    console.log("x1 " + x1)
    ctx.beginPath();
    ctx.strokeStyle='black';
    ctx.moveTo((x1*20),0);
    console.log("x1*30 " + x1*20)

    ctx.lineTo((x1*20),600);
    ctx.stroke(); 
}  

function drawHorizontal(y1)
{
    
    ctx.beginPath();
    ctx.strokeStyle='black';
    ctx.lineWidth = '0.5';
    ctx.moveTo(0,(y1*20));
    ctx.lineTo(600,(y1*20));
    ctx.stroke(); 
}  


for (i=1; i<30; i++){
    drawVertical(i);
}
for (j=1; j<30; j++){
    drawHorizontal(j);
} 

