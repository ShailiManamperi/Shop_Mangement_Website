import React from "react";
import {Route,Routes,Navigate} from "react-router-dom";

import AddProduct from "../pages/AddProducts";
import AllProducts from "../pages/AllProducts";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const Router = () => {
    return(
        <Routes>
        <Route path="/" element={<Navigate to='/dashboard'/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='dashboard/all-products' element={<AllProducts/>}/>
            <Route path='dashboard/add-products' element={<AddProduct/>}/>
            <Route path='/*' element={<ProtectedRoute/>}>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='dashboard/all-products' element={<AllProducts/>}/>
                <Route path='dashboard/add-products' element={<AddProduct/>}/>
            </Route>


        </Routes>
    ) ;
};

export default Router;