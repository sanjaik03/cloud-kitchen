import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null); 

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemID) => {
        setCartItems((prev) => ({
            ...prev,
            [itemID]: (prev[itemID] || 0) + 1,  // If item is not in cart, start at 1
        }));
    };

    const removeFromCart = (itemID) => {
        setCartItems((prev) => {
            if (!prev[itemID]) return prev; // If item is not in cart, do nothing

            const updatedCart = { ...prev };
            if (updatedCart[itemID] === 1) {
                delete updatedCart[itemID];  // Remove item if count reaches 0
            } else {
                updatedCart[itemID] -= 1;
            }
            return updatedCart;
        });
    };

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue = { 
        food_list, 
        cartItems, 
        setCartItems, 
        addToCart, 
        removeFromCart 
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
