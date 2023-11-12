import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ( {detail} ) => {
    const {carrito, setCarrito} = useContext(CartContext);
    const [contador, setContador] = useState(1);

    const handleSumar = () => {
        contador < detail.stock && setContador(contador + 1)
    };
    const handleRestar = () => {
        contador > 1 && setContador(contador - 1)
    };
    const handleAgregar = () =>{
        const itemAgregado = {...detail, contador};

        const nuevoCarrito = [...carrito];

        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if(estaEnElCarrito) {
            estaEnElCarrito.contador = estaEnElCarrito.contador + contador;
            setCarrito(nuevoCarrito);
        }else {
            setCarrito( [...carrito, itemAgregado] );
        }
    };

    return(
        <section className="box-container">
            <h2>{detail.title}</h2>
            <div>
                <img src={detail.imagen}></img>
                <p>{detail.description}</p>
                <p>{detail.price}</p>
            </div>
            <ItemCount
                contador = {contador}
                handleRestar = {handleRestar}
                handleSumar = {handleSumar}
                handleAgregar = {handleAgregar}
                onAdd = ""
            />
        </section>
    );
};

export default ItemDetail;