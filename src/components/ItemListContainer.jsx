const ItemListContainer = (props) => {
    return(
        <div className="background-image">
            <h1>{props.greeting}</h1>
            <h2>Envios de lunes a sabados!</h2>
        </div>
    );
};

export default ItemListContainer;