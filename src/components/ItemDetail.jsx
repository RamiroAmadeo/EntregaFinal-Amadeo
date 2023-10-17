import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    return(
        <section className="box-container">
            <h2>
                {props.detail.title}
            </h2>
            <div>
                <img src={props.detail.imagen}></img>
                <p>{props.detail.description}</p>
                <p>{props.detail.price}</p>
            </div>
            <ItemCount initial = {1} stock = {5} onAdd = ""/>
        </section>
    );
};

export default ItemDetail;