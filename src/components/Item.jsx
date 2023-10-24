import { Link } from "react-router-dom";

const Item = ({burguerList}) => {

    return(
        <div className="box-item">
            <h3>{burguerList.title}</h3>
            <img src={burguerList.imagen}></img>
            <p>{burguerList.description}</p>
            <h4>{burguerList.price}</h4>
            <Link to={`/detail/${burguerList.id}`} className="boton">Ver mas</Link>
        </div>
    );
};

export default Item;