
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
 color = "red";
 var last_position_x,last_position_y;
 width = 2;
 var screen_width = screen.width;
 new_width = screen.width - 70;
 new_height = screen.height - 300;
 if (screen_width > 992) {
     document.getElementById("myCanvas").width = new_width;
     document.getElementById("myCanvas").height = new_height;
     document.body.style.overflow = "hidden";
     
 }
 canvas.addEventListener("touchstart",touchstart);
 function touchstart(e){
     color = document.getElementById("color_input").value;
     width = document.getElementById("width_input").value;
     last_position_x = e.touches[0].clientX - canvas.offsetLeft;
     last_position_y = e.touches[0].clientY - canvas.offsetTop;
 }

 
 
 canvas.addEventListener("touchmove",touchmove);
 function touchmove(e){
     current_position_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_y = e.touches[0].clientY - canvas.offsetTop;
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = width;
     console.log("last X pos = " + last_position_x + "last Y pos = " + last_position_y);
     ctx.moveTo(last_position_x,last_position_y);
     console.log(" current X pos = " + current_position_x + "current Y pos" + current_position_y);
     ctx.lineTo(current_position_x,current_position_y);
     ctx.stroke();
 
 last_position_x = current_position_x;
 last_position_y = current_position_y;
 
 }
 function clear_area(){
     ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
 }
