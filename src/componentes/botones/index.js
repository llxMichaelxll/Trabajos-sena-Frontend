import React from 'react';
import {UseContador} from "../../hooks/useContador";
import Conta from '../contador';


 export const Button = () =>{

    const {Aumentar,Disminuir,Reset,data} = UseContador()

    return (
            <div>
                <Conta data = {data}/>
                <button onClick={()=>Disminuir()}>Disminuir</button>,
                <button onClick={()=>Reset()}>Reset</button>,
                <button onClick={()=>Aumentar()}>Aumentarr</button>
            </div>
    )
        
}