import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore"



const ItemListContainer = (props) => {
    const [burguerList, setBurguerList] = useState([])
    const [titulo, setTitulo] = useState("Productos")
    const [loading, setLoading] = useState(true)
    const categoria = useParams().categoria;

    useEffect(()=>{

        const productosCollection = collection(db, "productos")
        const q = categoria ? query(productosCollection, where("categoria", "==", categoria)) : productosCollection;

        getDocs(q)
            .then((resp)=>{
                if(categoria){
                    setBurguerList(
                        resp.docs.map((doc) => {
                            return {...doc.data(), id: doc.id}
                        }))
                        setTitulo(categoria)
                        setLoading(false)
                    }else{
                        setBurguerList(resp.docs.map((doc) => {
                            return {...doc.data(), id: doc.id}
                        }))
                        setTitulo("Productos")
                        setLoading(false)
                }
            })
        },[categoria])

        if(loading) return <p>Loading...</p>

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