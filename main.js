canvas = document.getElementById("myCanvas");

ctx= canvas.getContext("2d"); 

ctx.beginPath(); 
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(150, 143, 430 ,200);
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle = "BLUE"; 
ctx.lineWidth = 10; 
ctx.arc(272, 220, 40 ,0 , 2*Math.PI);
ctx.stroke();


ctx.beginPath(); 
ctx.strokeStyle = "Black";
ctx.lineWidth = 10;
ctx.arc(370, 220, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle = "Red";
ctx.lineWidth = 10; 
ctx.arc(470, 220, 40 ,0 , 2*Math.PI); 
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Green"; 
ctx.lineWidth = 10;
ctx.arc(421, 255, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle ="#ffcc33";
ctx.lineWidth = 10;
ctx.arc(321, 255, 40 ,0 , 2*Math.PI);
ctx.stroke();