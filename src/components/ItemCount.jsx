const ItemCount = ( {contador, handleRestar, handleSumar, handleAgregar} ) =>{

    return(
        <div>
            <p>Contador Actual: {contador}</p>
            <button onClick={handleAgregar}>Añadir</button>
            <button onClick={handleSumar}>Suma</button>
            <button onClick={handleRestar}>Resta</button>
        </div>
    );
};

export default ItemCount;