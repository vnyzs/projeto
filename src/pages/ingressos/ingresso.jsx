import { useState } from "react";
import './ingresso.scss';



function Ingresso(){
  const preco_ingresso = 30

  const[Quantidade, SetQuantidade]= useState(1);
  const[Meia, SetMeia] =useState(false);
  const[Cupom, SetCupom]= useState("")
  const[Total,setTotal]= useState('')


 function calculofinal(){

let valor = Quantidade * preco_ingresso;
 if(Meia){
    valor = valor / 2
}
 

if(Cupom === "desconto10"){
  valor = valor - (valor * 0.1)


  
}
setTotal(valor);


 }

 return (
  <div>
  <input type="number" min="0" value={Quantidade} onChange={(e)=> SetQuantidade(e.target.value)} />
  <input type="checkbox" checked={Meia} onChange={(e)=> SetMeia(e.target.checked)} />
  <input type="text" value={Cupom} onChange={(e)=> SetCupom(e.target.value)} />
  <button onClick={calculofinal}>Calcular</button>
  <p>Total: {Total}</p>




  </div>
     
      
    
  );


}







export default Ingresso;