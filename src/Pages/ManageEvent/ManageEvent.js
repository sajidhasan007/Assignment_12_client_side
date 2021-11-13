import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './ManageEvent.css';

const ManageEvent = () => {
    const [bookedevents, setBookevents] = useState([]);
    const [done, setDone] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/manageEvent', {
            headers: {
                'authorization': `bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookevents(data))
    }, [done])
    // console.log(bookedevents);
    const handledeletebook = id => {
        //console.log('deleted is is = ', id);
        const isConfirmDelete = window.confirm("Are you sure to delete this item");
        if (isConfirmDelete) {
            fetch(`http://localhost:5000/deleteevent/${id}`, { method: 'DELETE' })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Delete successful');
                        const remaining = bookedevents.filter(item => item._id !== id);
                        setBookevents(remaining);
                    }
                })
        }



    }
    const handleapprove = id => {
        console.log(id);
        const url = `http://localhost:5000/manageEvent/${id}`;
        const status = {
            status: 'Shipped'
        }
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.modifiedCount) {
                    alert('successfully updated');
                    done ? setDone(false) : setDone(true)
                }
            })
    }
    return (
        <div>
            <h1 className='text-center '>Here is all order</h1>
            <div>
                {bookedevents.map(item => <div key={item._id}>
                    <Container>
                        <div className='d-flex justify-content-center'>
                            <div className='manage-event mb-3 px-5 py-3'>
                                <h3>Bike Name: {item.bike_name}</h3>
                                <p className='mb-1'>Name: {item.name}</p>
                                <p className='mb-1'>User email: {item.email}</p>

                                <p className='mb-1'>Bike Price: {item.bike_price}</p>
                                <p className='mb-1'>Address: {item.address}</p>
                                <p className='mb-1'>Phone Number: {item.phone}</p>
                                <p className='mb-1'>Disk Type: {item.date}</p>
                                <p className='mb-1'>Quantity: {item.person}</p>
                                <p className='mb-1'>Status: {item.status}</p>

                                {item.status == 'Shipped' ? <button className='btn btn-success' disabled>Shipped</button>
                                    :
                                    <button onClick={() => handleapprove(item._id)} className='btn btn-success'>Shipped</button>}
                                <button onClick={() => handledeletebook(item._id)} className='btn btn-danger ms-2'>Delete</button>
                            </div>
                        </div>
                    </Container>
                </div>)
                }
            </div >
        </div >
    );
};

export default ManageEvent;