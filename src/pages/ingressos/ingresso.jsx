import { useState } from "react";
import './ingressos'



function Ingressos(){
  const preco_ingresso = 30

  const[Quantidade, SetQuantidade]= useState(1);
  const[Meia, SetMeia] =useState(false);
  const[Cupom, SetCupom]= useState("")
  const[Total,SetTotal]= useState('')


 function calculofinal(){

let valor = Quantidade * preco_ingresso;
 if(Meia){
    valor = valor / 2
}
 

if(Cupom === "desconto10"){
  valor = valor - (valor * 0.1)

}



 }

 return (
    <div className="ingressos">
      <Cabecalho titulo="Venda de Ingressos" />
     
      
      <div className="card">
        <h1>Venda de Ingressos</h1>

        <div className="linha">
          <label>Quantidade:</label>
          <input
            type="number"  min="0"      value={qtd}  onChange={(e)=>setQtd(e.target.value)}      />
        </div>

        <div className="linha">
          <label>Meia Entrada:</label>

          <input type="checkbox"  value={meia}    onChange={(e)=>setMeia(e.target.checked)}   />
        </div>

        <div className="linha">
          <label>Cupom:</label>
          <input   type="text"  value={cupom}    onChange={(e)=>setCupom(e.target.value)}    />
        </div>

        <div className="linha">
          <label></label>
          <button onClick={rob}>Calcular</button>
        </div>

        <p className="total">O total é R$ {total}</p>
      </div>
    </div>
  );


}







export default Ingressos