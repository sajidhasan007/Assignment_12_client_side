import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './MyEvent.css';

const MyEvents = () => {
    const [myEvents, setMyEvents] = useState([]);

    const { user } = useAuth();
    const email = {
        email: user?.email
    };
    // console.log(email);

    useEffect(() => {

        fetch('http://localhost:5000/myevents', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                setMyEvents(data);
            })
    }, [])
    //console.log(myEvents);


    const handledelete = id => {

        //console.log('deleted is is = ', id);
        const isConfirmDelete = window.confirm("Are you sure to delete this item");
        if (isConfirmDelete) {
            fetch(`http://localhost:5000/deleteevent/${id}`, { method: 'DELETE' })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Delete successful');
                        const remaining = myEvents.filter(item => item._id !== id);
                        setMyEvents(remaining);

                    }
                })
        }
    }

    return (
        <div>
            <div className='text-center'>
                <h1>All Orders of <span className='special-text'>{user.name}</span></h1>
            </div>
            <div>
                {myEvents.map(item => <div key={item._id}>
                    <Container>
                        <div className='d-flex justify-content-center'>
                            <div className='manage-event mb-3 px-5 py-3 '>
                                <h3>Bike Name: {item.bike_name}</h3>
                                <p className='mb-1'>Name: {item.name}</p>
                                <p className='mb-1'>User email: {item.email}</p>

                                <p className='mb-1'>Bike Price: {item.bike_price}</p>
                                <p className='mb-1'>Address: {item.address}</p>
                                <p className='mb-1'>Phone Number: {item.phone}</p>
                                <p className='mb-1'>Disk Type: {item.date}</p>
                                <p className='mb-1'>Quantity: {item.person}</p>
                                <p className='mb-1'>Status: {item.status}</p>

                                <Link to={`/event/${item._id}`}><button className='btn btn-warning '>Details</button></Link>
                                <button onClick={() => handledelete(item._id)} className='btn btn-danger ms-2'>Delete</button>

                            </div>
                        </div>
                    </Container>
                </div>)}
            </div>


        </div>
    );
};

export default MyEvents;