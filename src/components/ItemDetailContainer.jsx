import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () =>{
    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const id = useParams().id;

    useEffect(()=>{
        fetch('../../productos.json')
            .then((respuesta) => respuesta.json())
            .then((data) => {
                setDetail(data.find((el) => el.id === Number(id)))})
                setLoading(false)
        },[id])


    if (loading) return <p>loading...</p>


    return(
        <div>
            {detail && <ItemDetail detail={detail}/> }
        </div>
    );
};

export default ItemDetailConteiner;