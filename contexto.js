
function contexto()  //Cria uma função para a cena 2
{
  background (background_gradient); //O background é o gradiente criado anteriormente 
  
  fill(255); //preenchimento do retangulo é branco
  rect (0, 0, width*2, 150); //Cria um retangulo na posição 0,0 com a largura do ecra*2 e 150px de altura
  
  imageMode(CORNER); //Definir que o modo da imagem é CORNER
  image (imagem, 20, 20, 45, 45); //chama a imagem do logo do grupo e mete a imagem no x=20 y=20 e com as dimensoes de 45px por 45 px
  
  imageMode(CORNER); //Definir que o modo da imagem é CORNER
  image (imagem2, 120, 27, 150, 25); //chama a imagem do sns e mete a imagem no x=120 y=27 e com as dimensoes de 150px por 25x
  
  let title_size = 20; //Cria uma variavel title_size com o tamanho de 20px
  textSize (title_size); //Tamanho do texto com a variavel definida em cima 
  textAlign (CENTER, CENTER); //Alinhar o texto ao centro
  fill (0); //preenchimento do retangulo é preto
  
  textSize (title_size); //Tamanho do texto com a variavel definida em cima 
  textStyle(BOLD); //Estilo do texto ser BOLD
  textAlign (CENTER, CENTER); //Alinhar o texto ao centro
  fill (255); //preenchimento do retangulo é branco
  
  text ("The following research has as main focus analyze the hospital occupancy rate in the time of covid by regions.", width/2, 200 + width/15, width/1.2, height - title_size*2); //Cria uma caixa de texto na posição x=largura/2 y= 200px+largura/15 e com caixa de texto reativo consoante a largura do dispositivo

  
  let nxt_scene_btn_x = width/2;//Cria uma variavel para a posição x do botão
  let nxt_scene_btn_y = height/2+50; //Cria uma variavel para a posição y do botão
  let nxt_scene_btn_w = 200; //Cria uma variavel para a largura do botão
  let nxt_scene_btn_h = 55; //Cria uma variavel para a altura do botão
  
  rectMode (CENTER); //Define a localização do retangulo, neste caso é CENTRO
  noStroke(); //Desenha o retangulo sem stroke
  fill (255); //Desenha o retangulo com um preenchimento branco
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h,15); //Cria um retangulo com as variaveis definidas em cima
  
  
  textSize (title_size-5); //Tamanho do texto com a variavel definida em cima -5px
  textStyle(BOLD); //Estilo do texto ser BOLD
  textAlign (CENTER, CENTER); //Alinhar o texto ao centro
  fill (0); //Desenha o retangulo com um preenchimento branco
  text ("Analyze data", width/2, height/2+110 - title_size*3) //Cria uma caixa de texto na posição x=largura/2 y=altura/2 e acresentando 110 px - o tamanho do texto*3
  
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w/2 && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w/2 && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h/2 && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h/2 && 
      mouseIsPressed === true && 
      mouseIsReleased === true) //Cria uma condição para quando o botão é pressionado
  {

    scene = 3;
    mouseIsReleased = false; //passar para a cena 2 quando o botao é pressionado
  }
  
}

