import carrito from '../assets/cart-outline.svg'

const CartWidget = () => {
    return(
        <div className='cart-box'>
            <img className='carrito' src={carrito}></img>
            <div className='cart-number'>1</div>
        </div>
    );
};

export default CartWidget;