import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";

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