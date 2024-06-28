import React from "react";
import { Container,Row} from "reactstrap";
import { motion } from "framer-motion";
//import logo from '../assets/images/eco-logo.png';
import userIcon from '../assets/images/user-icon.png';
import '../style/adminNav.css';
import { NavLink } from "react-router-dom";


const admin_nav = [
    {
        display:'Dashboard',
        path: '/dashboard'
    },
    {
        display:'All-Products',
        path: '/dashboard/all-products'
    },
    {
        display:'Orders',
        path: '/dashboard/orders'
    },
    {
        display:'Users',
        path: '/dashboard/users'
    },
]


const AdminNav = () =>{
    return (
        <>
            <header className='admin__header'>
                <div className='admin_nav_top'>
                    <Container>
                        <div className='admin-nav-wrapper-top'>
                            <div className='logo'>
                                    <h2>Wimalasiri Furniture</h2>
                            </div>

                            <div className='search__box'>
                                <input type='text' placeholder='Search...'/>
                                <span><i className='ri-search-line'></i></span>
                            </div>
                            <div className="admin__nav-top-right">
                                <span><i className='ri-notification-3-line'></i></span>
                                <span><i className='ri-settings-2-line'></i></span>
                                <motion.img
                                    whileTap={{ scale: 1.2 }}
                                    src={userIcon}
                                    alt="usericon"
                                />
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
            <section className="admin__menu p-0">
                <Container>
                    <Row>
                        <div className="admin__navigation">
                            <ul className='admin__menu-list'>
                                {
                                    admin_nav.map((item ,index)=>(
                                        <li className="admin__menu-item" key={index}>
                                            <NavLink to={item.path} className={navClass=>navClass.isActive ? 'active__admin_menu' : ''}>
                                                {item.display}</NavLink>
                                        </li>
                                    ))
                                }
                                <div><button className={'btn btn-danger'}>Logout</button></div>
                            </ul>

                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default AdminNav;