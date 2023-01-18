let tabela_dados, data_elements, font;
let scene;
let mouseIsReleased;
let device_orientation;
let background_gradient;

function preload ()
{
  tabela_dados = loadTable("tabela_data.csv", "csv", "header"); //Nome do ficheiro, Tipo de Ficheiro, indicar que há header
  font = loadFont("Unbounded-Medium.ttf"); //Dar load a Font para usar
  imagem = loadImage("Logo Grupo.jpeg"); //Dar Load a imagem do logo do grupo
  imagem2= loadImage("Logo-SNS.png"); //Dar Load a imagem do SNS
}

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  
  if (width > height) device_orientation = "p"; //No caso da largura ser maior que a altura assumir que a orientação do dispositivo é p
  else
  if (width < height) device_orientation = "l"; //No caso da largura ser mmenos que a altura assumir que a orientação do dispositivo é l
  
  importData(); //Chama o ficheiro importData
  
  scene = 1; //Dar indicação que começa na Scene 1
  mouseIsReleased = true; //Ao pressionar o botao do rato o resultado ser verdeiro
  
  const from = color (35, 123, 163); //criar uma constante de cor
  const to = color (30, 55, 105); //criar uma constante de cor
  
  background_gradient = gradientHorBg(from, to); //A variavel background_gradient cria um gradiente horizontal que vai da cor From para a cor to, constantes criados anteriormente
  //background_gradient = gradientVerBg(from, to); //A variavel background_gradient cria um gradiente vertical que vai da cor From para a cor to, constantes criados anteriormente
  

}

function draw() 

{ 
  if (scene === 1) senha(); //se a cena for igual a 1 chama o ficheiro senha
  else 
  if (scene === 2) contexto();//se a cena for igual a 2 chama o ficheiro contexto
  else
  if (scene === 3) visual();//se a cena for igual a 3 chama o ficheiro visual
  else
  if (scene === 4) conc();//se a cena for igual a 4 chama o ficheiro conc
}


function mouseReleased()  //Cria uma função para quado o rato é pressionado
{
  mouseIsReleased = true;
}

function windowResized()
{
  resizeCanvas (windowWidth, windowHeight); //Faz o canvas reativo
}

function gradientHorBg (c1, c2) 
{
  const lerp_amt = 1/height; //Cria uma constante que calcula um numero entre 2 intervalos
  
  const pg = createGraphics (width, height);
  for (let i=0; i<=height; i++) 
  {
    pg.stroke (lerpColor(c1, c2, lerp_amt*i));
    pg.line (0, i, width, i);
  }
  
  const img = createImage (width, height);
  img.copy(pg, 0, 0, width, height, 0, 0, width, height);
  
  return img;
}


function gradientVerBg (c1, c2) 
{
  const lerp_amt = 1/width;
  
  const pg = createGraphics (width, height);
  for (let i=0; i<=width; i++) 
  {
    pg.stroke (lerpColor(c1, c2, lerp_amt*i));
    pg.line (i, 0, i, height);
  }
  
  const img = createImage (width, height);
  img.copy(pg, 0, 0, width, height, 0, 0, width, height);
  
  return img;
}
