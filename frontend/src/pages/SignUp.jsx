import React,{useState} from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form,FormGroup} from "reactstrap";
import { Link } from "react-router-dom";
import '../style/login.css';
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Signup = () => {

    const { data: Signup} = useFetch(`${BASE_URL}/`)

    const [username,setUsername]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [file,setFile]= useState(null)

    return (
        <Helmet title={'Signup'}>
            <section>
                <Container>
                    <Row>
                        <Col lg={6} className={'m-auto text-center'}>
                            <h3 className={'fw-bold mb-4'}>Signup</h3>

                            <Form className={'auth__form'}>
                                <FormGroup className={'form__group'}>
                                    <input type={'text'} placeholder={'Enter Username'}
                                           value={username} onChange={e=> setUsername(e.target.value)}/>
                                </FormGroup>
                                <FormGroup className={'form__group'}>
                                    <input type={'email'} placeholder={'Enter your email'}
                                           value={email} onChange={e=> setEmail(e.target.value)}/>
                                </FormGroup>
                                <FormGroup className={'form__group'}>
                                    <input type={'password'} placeholder={'Enter your password'}
                                           value={password} onChange={e=> setPassword(e.target.value)}/>
                                </FormGroup>
                                <FormGroup className={'form__group'}>
                                    <input type={'file'} onChange={e=> setFile(e.target.value)}/>
                                </FormGroup>

                                <button type={'submit'} className='buy_btn auth__btn '>Create an account</button>
                                <p>Already have an account? <Link to={'/login'}>Login</Link></p>

                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default  Signup;