import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router';

const Event = () => {
    const location = useLocation();
    const { eventid } = useParams();
    console.log(location);

    const [event, setEvent] = useState([]);

    useEffect(() => {
        //console.log('inside from useeffect');

        fetch(`http://localhost:5000/event/${eventid}`)
            .then(res => res.json())
            .then(data => setEvent(data))

    }, [])
    //console.log(event.bike_name);
    const particularservice = event[0] || {};
    //console.log(particularservice.max_mamber);
    return (

        <div className='d-flex justify-content-center'>

            <div>
                <Card style={{ width: '20rem' }} >
                    <Card.Img variant="top" src={particularservice?.event_img} />
                    <Card.Body>
                        <Card.Title>{particularservice?.bike_name}</Card.Title>
                        <h6>Bike Price: {particularservice?.bike_price}</h6>
                        <h6>Disk Type: {particularservice.date}</h6>
                        <h6>CC: {particularservice.max_mamber}</h6>
                        <Card.Text>
                            {particularservice?.description}
                        </Card.Text>

                        <Link to={`/book/${particularservice._id}`}><button className="btn btn-warning">Buy Now</button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Event;