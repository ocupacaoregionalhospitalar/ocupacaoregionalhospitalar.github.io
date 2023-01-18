
function conc() 
{
  background (background_gradient);
  
  fill(255); //preenchimento do retangulo é branco
  rect (0, 0, width*2, 150); //Cria um retangulo na posição 0,0 com a largura do ecra*2 e 150px de altura
  
  imageMode(CORNER); //Definir que o modo da imagem é CORNER
  image (imagem, 20, 20, 45, 45); //chama a imagem do logo do grupo e mete a imagem no x=20 y=20 e com as dimensoes de 45px por 45 px
  
  imageMode(CORNER); //Definir que o modo da imagem é CORNER
  image (imagem2, 120, 27, 150, 25); //chama a imagem do sns e mete a imagem no x=120 y=27 e com as dimensoes de 150px por 25x
  
  let title_size = 16; //Cria uma variavel title_size com o tamanho de 20px
  textSize (title_size); //Tamanho do texto com a variavel definida em cima 
  textAlign (CENTER, CENTER); //Alinhar o texto ao centro
  fill (0); //preenchimento do retangulo é preto
  
  textSize (title_size); //Tamanho do texto com a variavel definida em cima 
  textStyle(BOLD); //Estilo do texto ser BOLD
  textAlign (CENTER, CENTER); //Alinhar o texto ao centro
  fill (255); //preenchimento do retangulo é branco
  
  text ("From the results found in this research, we concluded that the hospital occupancy rate did not change drastically in the time of covid, it has an equivalent statistic in relation to previous years. What changed it was the difference in the hospitalization of users with covid in relation to other diseases.The covid meant that users with other illnesses had less space to be assisted, many had to advance appointments and treatments. We therefore concluded that covid delayed the treatment and hospitalization of users with other problems or illnesses in addition to all the trauma and deaths it caused.", width/2, 250 + width/15, width/1.2, height - title_size*2); //Cria uma caixa de texto na posição x=largura/2 y= 350px+largura/15 e com caixa de texto reativo consoante a largura do dispositivo
  
  textSize(13); //Tamanho do texto de 15px 
  text ("All the data gathered to do this research were found in the oficial site of the nacional health service of portugal", width/2, 450 + width/10, width/1.2, height - title_size*2); //Cria uma caixa de texto na posição x=largura/2 y= 650px+largura/15 e com caixa de texto reativo consoante a largura do dispositivo
}

