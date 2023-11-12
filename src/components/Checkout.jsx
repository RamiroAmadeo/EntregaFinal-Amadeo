import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";


const Checkout = () => {

    const { carrito, compraTotal, borrarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const [ compraId, setCompraId ] = useState("")

    const confirmar = (data) => {
        const pedido = {
            cliente: (data),
            productos: carrito,
            total: compraTotal()
        };

        const pedidoRef = collection(db, "pedidos");

        addDoc(pedidoRef, pedido)
            .then((doc) => {
                setCompraId(doc.id)
                borrarCarrito();
            })
    };

    if(compraId) {
        return(
            <div>
                <h1>Muchas gracias por tu compra</h1>
                <p>Tu id de pedido es: {compraId}</p>
            </div>
        )
    }

    return(
        <div>
            <h1>Finalizar la compra</h1>
            <form className="form-container" onSubmit={handleSubmit(confirmar)}>
                <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingrese su email" {...register("email")} />
                <input type="phone" placeholder="Ingrese su numero telefonico" {...register("telefono")} />
                <button type="submit">Comprar</button>
            </form>
        </div>
    );
};

export default Checkout;