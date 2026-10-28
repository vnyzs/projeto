import { useState } from 'react';
import './cores.scss';

export default function Cores() {
    const [cor, Setcor] = useState ('')
  return (
    <div className='pai' style={{backgroundColor: cor}}>
    
   
    <input
     type="color" 
     name=''
     id=''
     onChange={
        (e) => Setcor(e.target.value)
     }
     
     />
    

    </div>
  );
}