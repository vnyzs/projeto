import { useState } from 'react'; 
import './contadores.scss'

function Contadores(){
  const[Contador, setContador] = useState(0)


    function mais(){
      setContador(Contador + 1);

    }


    function menos(){
      setContador(Contador - 1);

    }



return(
  <div>

 <button></button>
 <button onClick={menos}>-</button>
 <button onClick={mais}>+</button>
  <h1>{Contador}</h1>
  </div>

)}





export default Contadores;