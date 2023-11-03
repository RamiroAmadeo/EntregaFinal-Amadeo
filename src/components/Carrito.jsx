import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const Carrito = () =>{

    const { carrito, compraTotal, borrarCarrito } = useContext(CartContext);

    return(
        <div>
            <h2>Carrito</h2>
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <h3>{prod.title}</h3>
                        <p>Precio unitario: ${prod.price}</p>
                        <p>Cant: ${prod.contador}</p>
                        <h4>Precio total: ${prod.price * prod.contador}</h4>
                    </div>
                ))
            }
            {
                carrito.length > 0 ?
                <>
                    <h2>Precio Total: ${compraTotal()} </h2>
                    <button onClick={borrarCarrito}>Borrar</button>
                </> :
                <p>El carrito esta vacio</p>
            }
        </div>
    );
};

export default Carrito;