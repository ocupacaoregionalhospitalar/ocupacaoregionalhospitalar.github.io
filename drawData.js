function drawData()
{
  
  fill(255); //preenchimento do retangulo é branco
  rect (0, 0, width*2, 150); //Cria um retangulo na posição 0,0 com a largura do ecra*2 e 150px de altur
  
  imageMode(CORNER); //Definir que o modo da imagem é CORNER
  image (imagem, 20, 20, 45, 45); //chama a imagem do logo do grupo e mete a imagem no x=20 y=20 e com as dimensoes de 45px por 45 px
  
  imageMode(CORNER); //Definir que o modo da imagem é CORNER
  image (imagem2, 120, 27, 150, 25); //chama a imagem do sns e mete a imagem no x=120 y=27 e com as dimensoes de 150px por 25x
  
  const tabela_m_inferior = 50; //Cria uma constante para a margem inferior da tabela 
  const tabela_x = 20; //Cria uma constante para a posição x da tabela
  const tabela_y = 130; //Cria uma constante para a posição y da tabela
  const tabela_w = width-(tabela_x)*2; //Cria uma constante para largura da tabela que é a largura- (o x da tabela)*2
  const tabela_h = height-tabela_m_inferior-tabela_y; //Cria uma constante para altura da tabela  que é a altura - a margem inferior da tabela - o y da tabela 
  
  const row_h = tabela_h/tabela_dados.getRowCount(); //Criar uma constante para a altura das linhas da tabela 
  
  stroke(0); //Retangulo com stroke a 0px
  rectMode(CORNER); //Define a localização do retangulo, neste caso é CENTRO
  
  
  for (let r=0; r<tabela_dados.getRowCount(); r++) 
  {
    data_elements[r].drawDataRow(tabela_x, tabela_y+r*row_h, tabela_w, row_h);
  }
  //Criar uma condição para os dados da tabela
  
  fill(255); //cor do texto branco
  textStyle(BOLD); //Estilo do texto BOLD
  textSize(20); //Tamanho do texto 20px
  text("Ano",tabela_x+(tabela_w/4)*0, 100, tabela_w/4, 20); //Cria uma caixa de texto em que o x é o x da tabela+ a largura da tabela a dividir por 4 e multiplica por 0 e 20 px de altura 
  text("Norte", tabela_x+(tabela_w/4)*1, 100, tabela_w/4, 20);//Cria uma caixa de texto em que o x é o x da tabela+ a largura da tabela a dividir por 4 e multiplica por 1 e 20 px de altura 
  text("Centro", tabela_x+(tabela_w/4)*2, 100, tabela_w/4, 20); //Cria uma caixa de texto em que o x é o x da tabela+ a largura da tabela a dividir por 4 e multiplica por 2 e 20 px de altura 
  text("Sul", tabela_x+(tabela_w/4)*3, 100, tabela_w/4, 20); //Cria uma caixa de texto em que o x é o x da tabela+ a largura da tabela a dividir por 4 e multiplica por 3 e 20 px de altura 
  

}
