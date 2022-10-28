import {useState} from 'react';

export const UseContador = () =>{

    const [data, setData] = useState(0);

    const Aumentar = () => {
        setData(data + 1);
    }
    const Disminuir = () => {
        if(data>0){
            setData(data-1);
        }
    }
    const reset = () =>{
        setData(0);
    }
    return{Aumentar, Disminuir, reset, data, setData} 
}