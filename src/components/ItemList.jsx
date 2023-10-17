import { useParams } from "react-router-dom";
import Item from "./Item";
import React, { useState, useEffect } from "react";

const ItemList = () =>{
    const [burguerList, setBurguerList] = useState([])
    const [titulo, setTitulo] = useState("Productos")
    const [loading, setLoading] = useState(true)
    const categoria = useParams().categoria;
    console.log (categoria, "asda")

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
                setLoading(false)
        },[categoria])
    if (loading) return <p>loading...</p>

    return(
        <div>
            <Item burguerList={burguerList} titulo={titulo} />
        </div>
    );


};

export default ItemList;