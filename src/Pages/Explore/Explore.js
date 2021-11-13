import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
const Explore = () => {

    const { bikes } = useAuth();

    /* const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))

    }, []) */

    if (!(bikes[0]?.bike_name)) {
        return <div>
            <div className='d-flex justify-content-center'>
                <Spinner animation="border" variant="primary" />
            </div>
        </div>
    }

    return (
        <div>
            <Container className='event-container'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {bikes.map(event => (
                        <Col key={event._id} >
                            <Card className='h-100 div1'>
                                <div className='d-flex justify-content-center overflow'>
                                    <Card.Img className='my-coustom d-flex justify-content-center' variant="top" src={event.event_img} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{event.bike_name}</Card.Title>
                                    <Card.Text>
                                        {event.description.slice(0, 90)}
                                        <span> ...</span>

                                    </Card.Text>
                                </Card.Body>
                                <div className='d-flex align-items-end'>
                                    <div className='p-3'>
                                        <Link className='me-3' to={`/book/${event._id}`}><button className="btn btn-primary">Buy Now</button></Link>
                                        <Link to={`/event/${event._id}`}><button className="btn btn-warning">Details</button></Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Explore;