function drawData()
{
  
  fill(255);
  rect (0, 0, width*2, 100);
  
  imageMode(CORNER);
  image (imagem, 20, 20, 60, 60);
  
  imageMode(CORNER);
  image (imagem2, 130, 37, 150, 25);
  
  const tabela_m_inferior = 50;
  const tabela_x = 20;
  const tabela_y = 170;
  const tabela_w = width-(tabela_x)*2;
  const tabela_h = height-tabela_m_inferior-tabela_y+30;
  
  const row_h = tabela_h/tabela_dados.getRowCount();
  
  stroke(0);
  rectMode(CORNER);
  
  
  for (let r=0; r<tabela_dados.getRowCount(); r++) 
  {
    data_elements[r].drawDataRow(tabela_x, tabela_y+r*row_h, tabela_w, row_h);
  }
  
  fill(0);
  textSize(15);
  text("Ano",               tabela_x+(tabela_w/4)*0, 140, tabela_w/4, 20);
  text("Norte", tabela_x+(tabela_w/4)*1, 140, tabela_w/4, 20);
  text("Centro",       tabela_x+(tabela_w/4)*2, 140, tabela_w/4, 20);
  text("Sul",          tabela_x+(tabela_w/4)*3, 140, tabela_w/4, 20);
  
  
  
  /*
  if (os_meus_elementos.lenght > 0)
    {
      const w = os_meus_elementos [0].grafico_barras_w;
      const h = os_meus_elementos [0].grafico_barras_h;
      const num_colunas = int (width/w)-3;
      const num_linhas = ceil(tabela_dados.getRowCount()/num_colunas);
      
      
      let i=0;
      for (let j=0; j<num_linhas; j++)
        {
          for (let l=0; l<num_colunas; l++)
            {
              os_meus_elementos[i].drawDataElement (c*(w+w/5)+w/2, quadrante*4+j*h+h);
              if (i < os_meus_elementos.lenght-1) i++;
              else break;
            }
        }
    }
    */
}
