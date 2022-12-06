import { useState } from "react";

const ItemCount = ({inicial, stock, onAdd}) => {
    const [contador, setContador] = useState(inicial);
    /* const boton = document.getElementById("boton1");
    console.log(boton); NO SE PUEDE */
    const sumar = () => contador < stock && setContador(contador + 1);

    const restar = () => contador > 1 && setContador(contador - 1);

    const agregarAlCarrito = () => onAdd(contador);
    return (
        <>
        <button className="btn btn-dark" onClick={() => restar()}>-</button>
        {contador}
        <button className="btn btn-dark" onClick={() => sumar()}>+</button>
        <img src="../img/addCart.svg" onClick={agregarAlCarrito} alt="" />
        </>
    );
}

export default ItemCount;
