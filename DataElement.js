class DataElement 
{
  constructor 
  (
    ano, 
    ocupacao_percentagem_norte, 
    ocupacao_percentagem_centro, 
    ocupacao_percentagem_sul
  )
  {
    this.ano = ano;
    this.ocupacao_percentagem_norte = ocupacao_percentagem_norte;
    this.ocupacao_percentagem_centro = ocupacao_percentagem_centro; 
    this.ocupacao_percentagem_sul = ocupacao_percentagem_sul;
  }

  drawDataRow (x, y, w, h) 
  {
    this.num_columns = 4;
    
    this.cell_m = 10;
    
    this.cell_w = w/this.num_columns;
    this.cell_h = h/4;
    
    this.cell_x = 
    this.cell_y = y+(h/2-this.cell_h/2);
   
    
    
    
    
    
    
    noFill();
    stroke(0, 255, 0);
    rect (x+this.cell_w*0, y, this.cell_w, h);
    rect (x+this.cell_w*1, y, this.cell_w, h);
    rect (x+this.cell_w*2, y, this.cell_w, h);
    rect (x+this.cell_w*3, y, this.cell_w, h);

    
    
    fill(255, 0, 0);
    noStroke();
    rect (x+this.cell_w*1+this.cell_m, this.cell_y, this.cell_w-this.cell_m*2, this.cell_h);
    rect (x+this.cell_w*2+this.cell_m, this.cell_y, this.cell_w-this.cell_m*2, this.cell_h);
    rect (x+this.cell_w*3+this.cell_m, this.cell_y, this.cell_w-this.cell_m*2, this.cell_h);
    
    const map_n = map(this.ocupacao_percentagem_norte, 0, 100, 0, this.cell_w);
    const map_c = map(this.ocupacao_percentagem_centro, 0, 100, 0, this.cell_w);
    const map_s = map(this.ocupacao_percentagem_sul, 0, 100, 0, this.cell_w);
    
    fill (255);
    rect (x+this.cell_w*1+this.cell_m, this.cell_y, map_n-this.cell_m*2, this.cell_h);
    rect (x+this.cell_w*2+this.cell_m, this.cell_y, map_c-this.cell_m*2, this.cell_h);
    rect (x+this.cell_w*3+this.cell_m, this.cell_y, map_s-this.cell_m*2, this.cell_h);
    
    textAlign (CENTER, CENTER);
    fill (255);
    textSize(16);
    text (this.ano, x+this.cell_w*0, y, this.cell_w, h);
    
    fill(0);
    textSize (10);
    text (this.ocupacao_percentagem_norte + "%", x+this.cell_w*1, this.cell_y-h/2.5, this.cell_w, h);
    text (this.ocupacao_percentagem_centro + "%", x+this.cell_w*2, this.cell_y-h/2.5, this.cell_w, h);
    text (this.ocupacao_percentagem_sul + "%", x+this.cell_w*3, this.cell_y-h/2.5, this.cell_w, h);
    
    /*
    console.log 
    (
      this.ano, 
      this.ocupacao_percentagem_norte, 
      this.ocupacao_percentagem_centro, 
      this.ocupacao_percentagem_sul
    );
    */
  }
}