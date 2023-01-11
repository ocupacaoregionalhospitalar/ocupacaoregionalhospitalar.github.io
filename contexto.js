
function contexto() 
{
  background (background_gradient);
  
  fill(255);
  rect (0, 0, width*2, 200);
    
  imageMode(CORNER);
  image (imagem, 20, 20, 60, 60);
  
  imageMode(CORNER);
  image (imagem2, 130, 37, 150, 25);
  
  let title_size = 20;
  textSize (title_size);
  textAlign (CENTER, CENTER);
  fill (0);
  
  textSize (title_size);
  textStyle(BOLD);
  textAlign (CENTER, CENTER);
  fill (255);
  
  text ("The following research has as main focus analyze the hospital occupancy rate in the time of covid by regions.", width/2, 200 + width/15, width/1.2, height - title_size*2);
  /*
  text ("The following research has as main focus analyze the ", width/2, height/2 - title_size*2);
  text ("hospital occupancy rate in the time of covid by regions.", width/2, height/2+35 - title_size*2);
  */
  
  
  
  let nxt_scene_btn_x = width/2;
  let nxt_scene_btn_y = height/2+50;
  let nxt_scene_btn_w = 200;
  let nxt_scene_btn_h = 55;
  
  rectMode (CENTER);
  noStroke();
  fill (255);
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h,15);
  
  
  textSize (title_size-5);
  textStyle(BOLD);
  textAlign (CENTER, CENTER);
  fill (0);
  text ("Analyze data", width/2, height/2+110 - title_size*3)
  
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w/2 && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w/2 && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h/2 && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h/2 && 
      mouseIsPressed === true && 
      mouseIsReleased === true)
  {
    //console.log("oi")
    scene = 3;
    mouseIsReleased = false;
  }
  
}

