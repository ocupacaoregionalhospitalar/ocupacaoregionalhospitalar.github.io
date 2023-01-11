function importData()
{
  data_elements = [];
  
  for (let r=0; r<tabela_dados.getRowCount(); r++)
  {
    //console.log (tabela_dados.getRows(r) );
    
    const ano = tabela_dados.getString (r, "ano");
    
    //const ocupacao_num_norte = tabela_dados.getNum (r, "norte_num");
    const ocupacao_percentagem_norte = tabela_dados.getNum (r, "norte_percentagem");
    
    //const ocupacao_num_centro = tabela_dados.getNum (r, "centro_num");
    const ocupacao_percentagem_centro = tabela_dados.getNum (r, "centro_perc");
    
    //const ocupacao_num_sul = tabela_dados.getNum (r, "sul_num");
    const ocupacao_percentagem_sul = tabela_dados.getNum (r, "sul_perc");
    
    //console.log (ocupacao_percentagem_sul);
    
    data_elements[r] = new DataElement 
    (
      ano, 
      ocupacao_percentagem_norte, 
      ocupacao_percentagem_centro, 
      ocupacao_percentagem_sul
    );
    
  }
}