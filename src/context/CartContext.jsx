import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    const cantidadEnCarrito = () => {
        return(
            carrito.reduce((acc, prod) => acc + prod.contador, 0)
        );
    };

    const compraTotal = () => {
        return(
            carrito.reduce((acc, prod) => acc + prod.price * prod.contador, 0)
        );
    };

    const borrarCarrito = () => {
        setCarrito([]);
    };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])

    return(
        <CartContext.Provider value={{
            carrito,
            setCarrito,
            cantidadEnCarrito,
            compraTotal,
            borrarCarrito
        }}>
            {children}
        </CartContext.Provider>
    );
};