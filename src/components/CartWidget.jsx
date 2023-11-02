import { Link } from 'react-router-dom';
import carritoSvg from '../assets/cart-outline.svg'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext)

    return(
        <div className='cart-box'>
            <Link to="/carrito">
                <img className='carrito' src={carritoSvg}></img>
                <div className='cart-number'>{cantidadEnCarrito()}</div>
            </Link>
        </div>
    );
};

export default CartWidget;