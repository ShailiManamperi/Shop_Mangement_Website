import React ,{useState,useEffect} from "react";
import '../style/home.css';

import Helmet from "../components/Helmet/Helmet";
import Services from "../services/Services";
import ProductList from "../components/Ui/ProductList";

import product from "../assets/data/products"

import { Container, Row , Col } from "reactstrap";
import heroImg from '../assets/images/hero-img.png'
import {Link} from "react-router-dom";
import { motion} from "framer-motion";

const Home = ()  => {

  const [data,setData] = useState(product)
  const year = new Date().getFullYear()

  useEffect(()=>{
    const filterdProduct = product.filter(
        (item)=> item.category === 'chair');
    setData(filterdProduct);
  },[]);

  return <Helmet title={'Home'}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Trending product in {year}</p>
              <h2>Make Your Interior More Minimalistic & Modern </h2>
              <p>Discover quality furnishings at our inviting shop. From modern sofas to classic tables, find the perfect pieces for your home.</p>
              <motion.button whileTap={{scale: 1.2 }} className="buy_btn">
                <Link to="/shop">SHOP NOW</Link>
              </motion.button>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="heroImg"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services/>
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className="text-center">
            <h2 className="section__title">Trending Products</h2>
          </Col>
          <ProductList data={data}/>
        </Row>
      </Container>
    </section>
  </Helmet>
};

export default Home;