import React, {useEffect, useState} from "react";
import {Container, Row , Col} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import '../style/Dashboard.css';
import axios from "axios";
import {toast} from "react-toastify";

const Dashboard = () =>{

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [items, setItem] = useState([]);

    const getAllItems = async () => {
        console.log("Fetching Items...");
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:4000/item", { withCredentials: true });
            setItem(response.data.data);
            console.log(items.length)
            toast.success('Items fetched successfully.');
        } catch (err) {
            console.log(err);
            toast.error('Something went wrong...');
        } finally {
            setLoading(false);
        }
    };
    const getAllUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:4000/users", { withCredentials: true });
            setUsers(response.data.data);
        } catch (err) {
            toast.error('Something went wrong...');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllUsers();
        getAllItems();
    }, []);

    return <Helmet title={'Dashboard'}>
        <section>
            <Container>
                <Row>
                    <Col className="lg-3">
                        <div className="revenue__box">
                            <h5>Total Sales</h5>
                            <span>Rs.220,000.00</span>
                        </div>
                    </Col>
                    <Col className="lg-3">
                        <div className="orders__box">
                            <h5>Orders</h5>
                            <span>100</span>
                        </div>
                    </Col>
                    <Col className="lg-3">
                        <div className="products__box">
                            <h5>Total Products</h5>
                            <span>{items.length}</span>
                        </div>
                    </Col>
                    <Col className="lg-3">
                        <div className="users__box">
                            <h5>Total sales</h5>
                            <span>{users.length}</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Dashboard;