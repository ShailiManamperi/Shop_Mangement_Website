import React, {useState,useEffect} from "react";
import {Container, Row, Col, Form, FormGroup} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ui/CommonSection";
import '../style/checkout.css';
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    useEffect(()=>{
        //get token
        const ACCESS_TOKEN = Cookies.get("token");
        //check token -> redirect
        if(!ACCESS_TOKEN) {
            navigate("/login");
        }
        getUsername();

    }, [navigate]);

    const getUsername = ()=>{
        const username = Cookies.get("user")
        setUsername(username);
    }

    const totalQty = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    const checkLogin = () =>{
        console.log(username)
        username ? navigate("/home") : navigate("/login");
    }

    return (
        <Helmet title={'Checkout'}>
            <CommonSection title={'Checkout'}/>
            <section>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h6 className={'mb-4 fw-bold'}>Billing Information</h6>
                            <Form action="" className={'billing__form'}>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder={'Enter your name'}/>
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="email" placeholder={'Enter your email'}/>
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="number" placeholder={'Phone number'}/>
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder={'Street address'}/>
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder={'City'}/>
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder={'Postal code'}/>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg={4}>
                            <div className="checkout__cart">
                                <h6>Total Qty: <span>{totalQty} items</span></h6>
                                <h6>Subtotal: <span>{totalAmount}</span></h6>
                                <h6>
                                    <span>
                                        Shipping: <br/>
                                        (free shipping)
                                    </span>
                                    <span>$0</span>
                                </h6>
                                <h4>Total cost: <span>{totalAmount}</span></h4>

                                <button className='buy_btn auth__btn w-100' onClick={checkLogin}>Place an order</button>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}

export default Checkout;