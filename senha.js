function senha() //Cria a função para a cena senha 
{
  background (background_gradient); //O background é o gradiente criado anteriormente 
  
  let title_size = 17; //Cria uma variavel title_size com o tamanho de 17px
  let nxt_scene_btn_x = width/2; //Cria uma variavel para a posição x do botão
  let nxt_scene_btn_y = height/2; //Cria uma variavel para a posição y do botão
  let nxt_scene_btn_w = 300; //Cria uma variavel para a largura do botão 
  let nxt_scene_btn_h = 70; //Cria uma variavel para a altura do botão
  
  fill(255); //preenchimento do retangulo é branco
  rect (0, 0, width*2, 150);//Cria um retangulo na posição 0,0 com a largura do ecra*2 e 150px de altura
  
  imageMode(CORNER); //Definir que o modo da imagem é CORNER
  image (imagem, 20, 20, 45, 45); //chama a imagem do logo do grupo e mete a imagem no x=20 y=20 e com as dimensoes de 45px por 45 px 
  
  imageMode(CORNER); //Definir que o modo da imagem é CORNER
  image (imagem2, 120, 27, 150, 25); //chama a imagem do sns e mete a imagem no x=120 y=27 e com as dimensoes de 150px por 25x 
  
  rectMode (CENTER); //Define a localização do retangulo, neste caso é CENTRO
  noStroke(); //Desenha o retangulo sem stroke
  fill(255); //Desenha o retangulo com um preenchimento branco
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h, 15); //Cria um retangulo com as variaveis definidas em cima
  
  textSize (title_size); //Tamanho do texto com a variavel definida em cima 
  textStyle(BOLD); //Estilo do texto ser BOLD
  textAlign (CENTER, CENTER); //Alinhar o texto ao centro
  fill (0); //A cor do texto é branca
  text ("Hospital occupancy by regions", width/2, height/2+53 - title_size*3); //Cria uma caixa de texto com o texto Hospital occupancy by regions na posição x=largura/2 y=altura/2 e acresentando 53 px - o tamanho do texto*3
  
  textSize (title_size - 4); //Tamanho do texto com a variavel definida em cima - 4
  textStyle(BOLDITALIC); //Estilo do texto ser ITALICO e BOLD
  textAlign (CENTER, CENTER); //Alinhar o texto ao centro
  fill (255); //A cor do texto é preto
  text ("Click on the button to start", width/2, height/2+110 - title_size*3); //Cria uma caixa de texto com o texto "Click on the button to start" na posição x=largura/2 y=altura/2 e acresentando 110px - o tamanho do texto*3
  
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w/2 && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w/2 && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h/2 && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h/2 && 
      mouseIsPressed === true && 
      mouseIsReleased === true) //Cria uma condição para quando o botão é pressionado
    

    
  {
    scene = 2; 
    mouseIsReleased = false;  //passar para a cena 2 quando o botao é pressionado

  }
}
