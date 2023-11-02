import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const Carrito = () =>{

    const { carrito, compraTotal } = useContext(CartContext);

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
            <h2>Precio Total: {compraTotal()} </h2>
        </div>
    );
};

export default Carrito;