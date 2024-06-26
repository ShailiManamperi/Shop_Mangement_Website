import React, { useState, useEffect, useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import '../style/login.css';
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const logoutTimer = useRef(null);
    const inactivityTime = 15 * 60 * 1000; // 15 minutes

    const validateSubmission = (e) => {
        e.preventDefault();
        // validation
        if (email && password) {
            submitLogin();
        } else {
            toast.error('Invalid Inputs..');
        }
    };

    const submitLogin = () => {
        const headers = { 'Content-Type': 'application/json' };

        let body = {
            email: email,
            password: password
        };

        axios.post("http://localhost:4000/auth/login", body, { headers: headers }).then(r => {
            console.log(r);
            Cookies.set("token", r.data.token, { expires: 1 / 96 }); // Expires in 15 minutes
            Cookies.set("user", r.data.data.username, { expires: 1 / 96 }); // Expires in 15 minutes
            toast.success('Login Successfully..');
            navigate("/checkout");
            startInactivityTimer(); // Start inactivity timer after login
        }).catch(err => {
            toast.error('Something went wrong...');
            console.log(err);
        });
    };

    const logoutUser = () => {
        Cookies.remove("token");
        Cookies.remove("user");

        navigate("/login");
        toast.info('You have been logged out due to inactivity.');
    };

    const startInactivityTimer = () => {
        clearInactivityTimer();
        logoutTimer.current = setTimeout(logoutUser, inactivityTime);
    };

    const clearInactivityTimer = () => {
        if (logoutTimer.current) {
            clearTimeout(logoutTimer.current);
        }
    };

    useEffect(() => {
        const events = ['load', 'mousemove', 'mousedown', 'click', 'scroll', 'keypress'];

        const resetTimer = () => {
            if (Cookies.get("token")) {
                startInactivityTimer();
            }
        };

        const handleUnload = () => {
            const token = Cookies.get("token");
            if (token) {
                // Call logout API to set status as 'logout'
                axios.post("http://localhost:4000/auth/logout", { email })
                    .then(() => {
                        Cookies.remove("token");
                        Cookies.remove("user");
                    }).catch(err => console.error('Logout API error:', err));
            }
        };

        events.forEach(event => {
            window.addEventListener(event, resetTimer);
        });

        window.addEventListener('beforeunload', handleUnload);

        return () => {
            events.forEach(event => {
                window.removeEventListener(event, resetTimer);
            });
            window.removeEventListener('beforeunload', handleUnload);
            clearInactivityTimer();
        };
    }, [email]);

    return (
        <Helmet title={'Login'}>
            <section>
                <Container>
                    <Row>
                        <Col lg={6} className={'m-auto text-center'}>
                            <h3 className={'fw-bold mb-4'}>Login</h3>
                            <Form className={'auth__form'}>
                                <FormGroup className={'form__group'}>
                                    <input type={'email'} placeholder={'Enter your email'}
                                           value={email} onChange={e => setEmail(e.target.value)} />
                                </FormGroup>
                                <FormGroup className={'form__group'}>
                                    <input type={'password'} placeholder={'Enter your password'}
                                           value={password} onChange={e => setPassword(e.target.value)} />
                                </FormGroup>
                                <button type={'submit'} onClick={validateSubmission} className='buy_btn auth__btn '>Login</button>
                                <p>Don't have an account? <Link to={'/signup'}>Create an account</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;
