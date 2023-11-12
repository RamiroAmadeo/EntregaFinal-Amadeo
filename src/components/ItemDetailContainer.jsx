import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ItemDetailConteiner = () =>{

    const [detail, setDetail] = useState([])
    const id = useParams().id;
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp) => {
                setDetail(
                    {...resp.data(), id: resp.id }
                )
                setLoading(false);
        })
    },[id])

    if(loading) return <p>Loading...</p>

    return(
        <div>
            {detail && <ItemDetail detail={detail}/> }
        </div>
    );
};

export default ItemDetailConteiner;