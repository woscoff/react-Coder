import { useState } from "react";

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    /* const boton = document.getElementById("boton1");
    console.log(boton); NO SE PUEDE */
    const sumar = () =>{
        if(contador < 10)
        setContador(contador+1)
    } 
    const restar = () => {
        if(contador > 1)
        setContador(contador-1)
    }
    return (
        <>
        <button className="btn btn-dark" onClick={() => sumar()}>+</button>
        {contador}
        <button className="btn btn-dark" onClick={() => restar()}>-</button>
        <button className="btn btn-light">Agregar al carrito</button>
        </>
    );
}

export default ItemCount;
