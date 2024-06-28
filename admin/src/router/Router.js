import React from "react";
import {Route,Routes,Navigate} from "react-router-dom";

import AddProduct from "../pages/AddProducts";
import AllProducts from "../pages/AllProducts";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import User from "../pages/User";

const Router = () => {
    return(
        <Routes>
        <Route path="/" element={<Navigate to='/dashboard'/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='dashboard/users' element={<User/>}/>
            <Route path='dashboard/all-products' element={<AllProducts/>}/>
            <Route path='dashboard/add-products' element={<AddProduct/>}/>
            <Route path="dashboard/product-detail/:id" element={<ProductDetails />} />
        </Routes>
    ) ;
};

export default Router;