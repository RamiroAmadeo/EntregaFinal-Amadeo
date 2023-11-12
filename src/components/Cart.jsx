import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const Carrito = () =>{

    const { carrito, setCarrito, compraTotal, borrarCarrito } = useContext(CartContext);

    const handleDelete = (id) =>{
        const prodFilt = carrito.filter((prod) => prod.id !== id)
        setCarrito(prodFilt)
    }

    return(
        <div>
            <h2>Carrito</h2>
            <div className="detail-container">
                {
                    carrito.map((prod) => (
                        <div className="detail-box" key={prod.id}>
                            <h3>{prod.title}</h3>
                            <p>Precio unitario: ${prod.price}</p>
                            <p>Cant: {prod.contador}</p>
                            <h4>Precio total: ${prod.price * prod.contador}</h4>
                            <button onClick={()=>handleDelete(prod.id)}>X</button>
                        </div>
                    ))
                }
            </div>
            {
                carrito.length > 0 ?
                <>
                    <h2>Precio Total: ${compraTotal()} </h2>
                    <button onClick={borrarCarrito}>Borrar carrito</button>
                    <Link to="/checkout"><button>Confirmar compra</button></Link>
                </> :
                <p>El carrito esta vacio</p>
            }
        </div>
    );
};

export default Carrito;