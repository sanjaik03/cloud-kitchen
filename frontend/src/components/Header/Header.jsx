import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-overlay"></div>
      <div className="header-contents">
        <h2>Fresh, Fast & Delicious</h2>
        <p>
          Experience the future of dining with our Cloud Kitchen!  
          Enjoy chef-crafted meals, prepared with the finest ingredients and delivered hot to your doorstep.  
          No waiting, no hassle—just great food, made fresh for you!
        </p>
        <button className="explore-btn">Explore Menu</button>
      </div>
    </div>
  );
};

export default Header;
