import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
/* import { app } from "../firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore"

const db = getFirestore(app);
const productosCollection = collection(db, "productos")
const consulta = getDocs(productosCollection)

consulta.then((resp) => {
    console.log(resp.docs[0].id, "resp")
    console.log(resp.docs[0].data(), "data")
})


console.log(consulta, "asd") */

const ItemListContainer = (props) => {
    const [burguerList, setBurguerList] = useState([])
    const [titulo, setTitulo] = useState("Productos")
    const categoria = useParams().categoria;

    useEffect(()=>{
        fetch('../../productos.json')
            .then((respuesta) => respuesta.json())
            .then((data) => {
                if(categoria){
                    setBurguerList(data.filter((prod) => prod.categoria === categoria))
                    setTitulo(categoria)
                }else{
                    setBurguerList(data)
                    setTitulo("Productos")
                }
                })
        },[categoria])
    return(
        <>
            <div className="background-image">
                <h1>{props.greeting}</h1>
                <h2>Envios de lunes a sabados!</h2>
            </div>
            <div>
                <ItemList burguerList={burguerList} titulo={titulo} />
            </div>
        </>
    );
};

export default ItemListContainer;