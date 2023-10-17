import { Link } from "react-router-dom";

const Item = (props) => {

    return(
        <>
            <h2>{props.titulo}</h2>
            <section className="box-container">
                {props.burguerList.map((item) => {
                    return(
                        <div className="box-item">
                            <h3>{item.title}</h3>
                            <img src={item.imagen}></img>
                            <p>{item.description}</p>
                            <h4>{item.price}</h4>
                            <Link to={`/detail/${item.id}`}>Ver mas</Link>
                        </div>
                    )
                })}
            </section>
        </>
    );
};

export default Item;