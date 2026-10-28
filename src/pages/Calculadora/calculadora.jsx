import { useState } from 'react';
import './calculadora.scss';

function Calculadora() {
  
        const[num, SetNum]=useState("");
        const[num2,SetNum2]=useState("");
        const[resp,SetResp]=useState("");
      
        function somar() {
        let soma = Number(num) + Number(num2)
        SetResp(soma);
    }



  return (
    <div>
      <input    
      type='Number' value={num} onChange={(e)=>SetNum(Number (e.target.value))}
      />
<input
      type='Number' value={num2} onChange={(e)=>SetNum2(Number(e.target.value))}
      />
<div>=</div>

<div>{resp}</div>

  <button onClick={somar}>Somar</button>
    </div>
  );
}

export default Calculadora;
