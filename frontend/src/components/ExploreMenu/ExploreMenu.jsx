import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './ExploreMenu.css';
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'> Discover a variety of delicious dishes, crafted with the finest ingredients to satisfy your cravings.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <Link to="/menu" key={index} className="explore-menu-list-item">
                            <img src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default ExploreMenu;
