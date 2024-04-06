import React ,{useState,useEffect} from "react";
import '../style/home.css';

import Helmet from "../components/Helmet/Helmet";
import Services from "../services/Services";
import ProductList from "../components/Ui/ProductList";
import Clock from "../components/Ui/Clock";

import product from "../assets/data/products"
import counterImg from "../assets/images/counter-timer-img.png"

import { Container, Row , Col } from "reactstrap";
import heroImg from '../assets/images/hero-img.png'
import {Link} from "react-router-dom";
import { motion} from "framer-motion";

const Home = ()  => {

  const [trendingProducts,settrendingProducts] = useState([])
  const [bestSalesProducts,setbestSalesProducts] = useState([])
  const year = new Date().getFullYear()

  useEffect(()=>{
    const filterdTrendigProduct = product.filter(
        (item)=> item.category === 'chair'
    );
    const filterBestSalesProduct = product.filter(
        (item)=> item.category === 'sofa'
    );

    settrendingProducts(filterdTrendigProduct);
    setbestSalesProducts(filterBestSalesProduct);
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
          <ProductList data={trendingProducts}/>
        </Row>
      </Container>
    </section>
    <section className="best__sales">
      <Container>
        <Row>
          <Col lg='12' className="text-center">
            <h2 className="section__title">Best Sales</h2>
          </Col>
          <ProductList data={bestSalesProducts}/>
        </Row>
      </Container>
    </section>
    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="clock__top-content">
              <h4 className="text-white fs-6 mb-2">Limit offers</h4>
              <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
            </div>
            <Clock/>
            <motion.button whileTap={{scale:1.2}} className="buy_btn store__btn">
              <Link to="/shop">Visit Stores</Link>
            </motion.button>
          </Col>
          <Col lg='6' md='6' className="text-end">
            <img src={counterImg} alt={""}/>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
};

export default Home;