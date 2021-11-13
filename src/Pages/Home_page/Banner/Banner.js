import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './Banner.css';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner3.jpg';
import banner3 from '../../../images/banner2.jpg';



const Banner = () => {
    return (

        <>
            {/* <Container> */}
            <Carousel className='m-3'>
                <Carousel.Item>

                    <div className='banner-style'>
                        <Row>
                            <Col sm={12} md={6}>
                                <div >
                                    <div className='text-center'>
                                        <h1>Welcome Bike Zone</h1>
                                        <h2>Upcomming Pre-Order</h2>
                                        <h5>Make your Dream True with your desiar bike and pay your money to a trusted place</h5>
                                        <Link to='/explore'> <button className='btn btn-danger mb-3'>Explore</button></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <img
                                    className="d-block w-100 img-style"
                                    src={banner1}
                                    alt="First slide"
                                />
                            </Col>
                        </Row>
                    </div>





                </Carousel.Item>
                <Carousel.Item>
                    <div className='banner-style'>
                        <Row>
                            <Col sm={12} md={6}>
                                <div >
                                    <div className='text-center'>
                                        <h1>Make a Gift for your dear</h1>
                                        <h2>Gift Offer</h2>
                                        <h5>Make your Dream True with your desiar bike and pay your money to a trusted place</h5>
                                        <Link to='/explore'> <button className='btn btn-danger'>Explore</button></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <img
                                    className="d-block w-100 img-style"
                                    src={banner2}
                                    alt="Second slide"
                                />
                            </Col>
                        </Row>
                    </div>



                </Carousel.Item>
                <Carousel.Item>

                    <div className='banner-style '>
                        <Row>
                            <Col sm={12} md={6}>
                                <div >
                                    <div className='text-center'>
                                        <h1>Welcome Bike Zone</h1>
                                        <h2>New Collections</h2>
                                        <h5>Make your Dream True with your desiar bike and pay your money to a trusted place</h5>
                                        <Link to='/explore'> <button className='btn btn-danger'>Explore</button></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <img
                                    className="d-block w-100 img-style"
                                    src={banner3}
                                    alt="Third slide"
                                />
                            </Col>
                        </Row>

                    </div>



                </Carousel.Item>

            </Carousel>
            {/* </Container> */}
        </>

    );
};

export default Banner;