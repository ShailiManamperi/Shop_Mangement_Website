import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import userImg from '../assets/images/user-icon.png';
import '../style/users.css';

const User = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllUsers = async () => {
        console.log("Fetching users...");
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:4000/users", { withCredentials: true });
            console.log(response.request);
            setUsers(response.data.data);
            toast.success('Users fetched successfully.');
        } catch (err) {
            console.log(err);
            toast.error('Something went wrong...');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <h4 className="fw-bold">Users</h4>
                    </Col>
                    <Col lg="12" className="pt-5">
                        {loading ? (
                            <h5 className="pt-5 fw-bold">Loading...</h5>
                        ) : (
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {users.length > 0 ? (
                                    users.map(user => (
                                        <tr key={user._id}>
                                            <td><img src={userImg} alt="User" /></td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td><button className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center">No users found</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default User;
//1.06