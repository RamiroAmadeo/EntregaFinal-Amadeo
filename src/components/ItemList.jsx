import Item from "./Item";

const ItemList = ( props ) =>{
    return(
        <>
            <h2 className="categoria">{props.titulo}</h2>
            <section className="box-list">
                {props.burguerList.map((item) => <Item burguerList={item} key={item.id}/>)}
            </section>
        </>
    );
};

export default ItemList;