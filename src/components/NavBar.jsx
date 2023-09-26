import CartWidget from "./CartWidget";

const Navbar = () => {
    return(
        <nav className="nav-box">
            <h1>GreenFlag</h1>
            <ul className="nav-links">
                <li><a href="">Menu</a></li>
                <li><a href="">Locales</a></li>
                <li><a href="">Contacto</a></li>
                <CartWidget/>
            </ul>
        </nav>
    );
};

export default Navbar;