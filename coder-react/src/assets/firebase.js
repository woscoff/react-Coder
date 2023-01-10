import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "reactcoder-25cdb.firebaseapp.com",
  projectId: "reactcoder-25cdb",
  storageBucket: "reactcoder-25cdb.appspot.com",
  messagingSenderId: "843498909676",
  appId: "1:843498909676:web:05d9f3d2d639195d309ac9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()



/* const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db,"productos"), { //collection si existe consulta si no existe crea
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
} */

const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"));
    const items = productos.docs .map(prod =>{
        return {...prod.data(), id: prod.id}
    })
    return items
}

const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = {...producto.data(), id: producto.id}
    return item
}

const updateProducto = async (id, info) =>{
    const estado= await updateDoc(doc(db,"productos", id), info)
    return estado
}

const deleteProducto = async(id)=>{
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
}



export {getProductos, getProducto, updateProducto, deleteProducto}