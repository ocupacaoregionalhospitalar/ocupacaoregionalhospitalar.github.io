function visual() 
{
  background (background_gradient);
  
  drawData();
  
  let title_size = 20;
  let nxt_scene_btn_x = width/2;
  let nxt_scene_btn_y = height-25;
  let nxt_scene_btn_w = 150;
  let nxt_scene_btn_h = 30;
  
  rectMode (CENTER);
  stroke(10);
  fill (255);
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h,10);
  
  noStroke();
  textSize (title_size-4);
  textStyle(BOLD);
  textAlign (CENTER, CENTER);
  fill (0);
  text ("Conclusion", nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h);
  
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w/2 && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w/2 && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h/2 && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h/2 && 
      mouseIsPressed === true && 
      mouseIsReleased === true)
  {
    //console.log("oi")
    scene = 4;
    mouseIsReleased = false;
  }
}
