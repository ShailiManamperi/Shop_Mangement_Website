import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import Cookies from "js-cookie";


const ProtectedRoute = ({ children}) =>{
    const [username, setUsername] = useState('');
    setUsername(Cookies.get("user"));
    return username ? children : <Navigate to={'/login'}/>;

}

export default ProtectedRoute;