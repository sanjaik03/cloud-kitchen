import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import { StoreContext } from "../../Context/Storecontext"; // Import StoreContext
import { assets } from "../../assets/assets"; 
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useContext(StoreContext);  // Get cart items from context

  // Check if cart has items
  const hasItems = Object.values(cartItems).some((count) => count > 0);

  return (
    <nav className="navbar">
      {/* Cloud Kitchen Brand (Left) */}
      <div className="navbar-brand">Cloud Kitchen</div>

      {/* Centered Navigation Menu */}
      <ul className="navbar-menu">
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* Right Side (Basket, and Login Button) */}
      <div className="navbar-right">
        
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Basket" className="basket-icon" />
          </Link>
          {/* Only show the dot if there are items in the cart */}
          {hasItems && <div className="dot"></div>}
        </div>

        {/* Admin Login Button */}
        <button className="admin-login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
