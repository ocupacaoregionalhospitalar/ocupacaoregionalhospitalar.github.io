let tabela_dados, data_elements, font;
let scene;
let mouseIsReleased;
let device_orientation;
let background_gradient;

function preload ()
{
  tabela_dados = loadTable("tabela_data.csv", "csv", "header"); //Nome do ficheiro, Tipo de Ficheiro, indicar que há header
  font = loadFont("Unbounded-Medium.ttf"); //Dar load a Font para usar
  imagem = loadImage("Logo Grupo.jpeg");
  imagem2= loadImage("Logo-SNS.png");
}

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  
  if (width > height) device_orientation = "p";
  else
  if (width < height) device_orientation = "l";
  
  importData();
  
  scene = 1;
  mouseIsReleased = true;
  
  const from = color (35, 123, 163);
  const to = color (30, 55, 105);
  
  background_gradient = gradientHorBg(from, to);
  //background_gradient = gradientVerBg(from, to);
  

}

function draw() 

{ 
  if (scene === 1) senha();
  else 
  if (scene === 2) contexto();
  else
  if (scene === 3) visual();
  else
  if (scene === 4) conc();
}


function mouseReleased() 
{
  mouseIsReleased = true;
}

function windowResized()
{
  resizeCanvas (windowWidth, windowHeight)
}

function gradientHorBg (c1, c2) 
{
  const lerp_amt = 1/height;
  
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
