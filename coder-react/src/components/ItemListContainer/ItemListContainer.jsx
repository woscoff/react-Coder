import {useState, useEffect} from 'react';
import ItemList from '../itemList/itemList.jsx';
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../assets/funciones.js';
//Consultar BDD
const ItemListContainer = () => {
    const[productos, setProductos] = useState([]);
    const {category} = useParams();
    useEffect(() => {
        if(category){
            consultarBDD('../json/productos.json').then(products =>{
                const productsList= products.filter(prod => prod.stock > 0).filter(prod =>prod.idCategoria === parseInt(category))
                const cardProductos = ItemList({productList})
                setProductos(cardProductos);
            })
        }else{
            consultarBDD('./json/productos.json').then(products =>{
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productList})
                setProductos(cardProductos);
            })
        }
    }, [category]);
    //[] cuando sucedan cambios en todo el array
    //[propiedad] cuando se modifica un objeto interno del array
    
    return (
        <>
            <div className="row cardProductos">
                {productos}
            </div>
        </>
    );
}

export default ItemListContainer;
