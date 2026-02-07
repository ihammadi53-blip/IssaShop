import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            ISSA <span>Shop</span> <span id="cart-count"></span>
          </Link>
        </div>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>

            <li className="dropdown">
            <Link to ="/products" className="dropbtn">Products</Link>

              <ul className="dropdown-content">
                <li><Link to="/products/electronics">Electronics</Link></li>
                <li><Link to="/products/clothing">Jewelery</Link></li>
               <li> <Link to="/products/home-garden">Men's Clothing</Link></li>
               <li> <Link to="/products/sports">Women's Clothing</Link></li>
              </ul>
            </li>

            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
