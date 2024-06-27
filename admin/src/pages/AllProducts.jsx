import React from "react";
import { Container,Row,Col} from "reactstrap";
import Productimg from '../assets/images/double-sofa-03.png';
import '../style/allProducts.css';


const AllProducts = () =>{
    return <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <table className={'table table-bordered'}>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={Productimg} alt={'Sofa'}/></td>
                                <td>Amazon Brand Modern Sofa</td>
                                <td>Sofa</td>
                                <td>Rs.220000.00</td>
                                <td><button className='btn btn-danger'>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    </section>

};

export default AllProducts;