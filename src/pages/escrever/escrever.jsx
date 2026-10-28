import { useState } from 'react';
import './escrever.scss'

function Escrever() {
    const [text, SetTexto] = useState('')
    return (
        <div>

            <input

                type='text'
                placeholder='coloque'
                id=''
                onChange={
                    (e) => SetTexto(e.target.value)}
            />


            <h1>{text}</h1>





        </div>

    )

}









export default Escrever;