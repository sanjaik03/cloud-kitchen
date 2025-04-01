import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer"; 
import StoreContextProvider from "./Context/Storecontext"; 
import Cart from "./pages/Cart/Cart"; 
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

const App = () => {
  return (
    <StoreContextProvider>  
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/order" element={<PlaceOrder />} /> 
        </Routes>
        <Footer />  
      </div>
    </StoreContextProvider>
  );
};

export default App;
