import React from "react";
import "./index.css";
import {Switch, Route, Routes} from "react-router-dom";
import Home from "../../Pages/Home";
import Catalog from "../../Pages/Catalog";
import Cart from "../../Pages/Cart";
import Product from "../../Pages/Product";

const Main = ({search}) => {
   
    return (
        <main>
            
            <Routes>
                <Route path="/catalog" element={<Home/>}/> 
                <Route path="/" element={<Catalog searchText={search}/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/product/:id" element ={<Product/>}/>
            </Routes>

        </main>
    )
}
export default Main;