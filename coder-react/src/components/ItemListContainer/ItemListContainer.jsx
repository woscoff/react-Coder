import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../assets/funciones.js';
import { cargarBDD, getProductos, getProducto, updateProducto, deleteProducto} from '../../assets/firebase.js';   
//Consultar BDD
const ItemListContainer = () => {
    const[productos, setProductos] = useState([]);
    const {category} = useParams();
    useEffect(() => {
         if(category){
            getProductos().then(products =>{
                const productsList= products.filter(prod => prod.stock > 0).filter(prod =>prod.idCategoria === parseInt(category))
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos);
            })
        }else{
            getProductos().then(products =>{
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos);
            })
        }
        
        // "0gcEm7Tt9S2kh7PIzs7n"
        // cargarBDD().then(productos => console.log(productos))
        /* getProductos().then(productos => console.log(productos))
        getProducto("0gcEm7Tt9S2kh7PIzs7n").then(prod => console.log(prod)) */
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