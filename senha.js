function senha() 
{
  background (background_gradient);
  
  let title_size = 17;
  let nxt_scene_btn_x = width/2;
  let nxt_scene_btn_y = height/2;
  let nxt_scene_btn_w = 300;
  let nxt_scene_btn_h = 70;
  
  fill(255);
  rect (0, 0, width*2, 200);
  imageMode(CORNER);
  image (imagem, 20, 20, 60, 60);
  
  imageMode(CORNER);
  image (imagem2, 130, 37, 150, 25);
  
  rectMode (CENTER);
  noStroke();
  fill(255);
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h, 15);
  
  textSize (title_size);
  textStyle(BOLD);
  textAlign (CENTER, CENTER);
  fill (0);
  text ("Hospital occupancy by regions", width/2, height/2+53 - title_size*3);
  
  textSize (title_size - 4);
  textStyle(BOLDITALIC);
  textAlign (CENTER, CENTER);
  fill (255);
  text ("Click on the button to start", width/2, height/2+110 - title_size*3);
  
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w/2 && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w/2 && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h/2 && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h/2 && 
      mouseIsPressed === true && 
      mouseIsReleased === true)
    

    
  {
    scene = 2;
    mouseIsReleased = false;
  }
  
}
