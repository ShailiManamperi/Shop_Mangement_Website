import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import Cookies from 'js-cookie';
import { Outlet } from "react-router-dom";


const ProtectedRoute = () =>{
    const [username, setUsername] = useState('');
    setUsername(Cookies.get("user"));
    return username ? <Outlet/> : <Navigate to={'/login'}/>;

}

export default ProtectedRoute;