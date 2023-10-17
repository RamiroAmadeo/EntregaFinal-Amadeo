import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) =>{

    const [contador, setContador] = useState(initial);

    const handleSumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        };
    };
    const handleRestar = () => {
        if (contador > 1){
        setContador(contador - 1)
        };
    };

    return(
        <div>
            <p>Contador Actual : {contador}</p>
            <button>Confirmar Compra</button>
            <button onClick={handleSumar}>Suma</button>
            <button onClick={handleRestar}>Resta</button>
        </div>
    );
};

export default ItemCount;