function visual() 
{
  background (background_gradient);
  
  drawData();
  
  let title_size = 20;
  let nxt_scene_btn_x = width-100;
  let nxt_scene_btn_y = 100;
  let nxt_scene_btn_w = 100;
  let nxt_scene_btn_h = 30;
  
  rectMode (CENTER);
  noStroke();
  fill (255);
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h,15);
  
  
  textSize (title_size-5);
  textStyle(BOLD);
  textAlign (CENTER, CENTER);
  fill (0);
  text ("Conlusion", nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h);
  
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
