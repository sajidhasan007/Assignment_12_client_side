import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const [description, setDescription] = useState('');
    const [rate, setRate] = useState('');

    const handlediscription = e => {
        setDescription(e.target.value);

    }

    const handlerating = e => {
        setRate(e.target.value);


    }

    const handleonsubmit = (e) => {
        const ratting = {
            name: user.name,
            email: user.email,
            description: description,
            rate: rate
        }

        console.log(ratting);
        e.preventDefault();

        fetch('http://localhost:5000/user/ratting', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ratting)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data.insertedId);
                if (data.insertedId) {
                    alert('You have booked successfully');
                    e.target.value = ''
                }
            })


    }

    return (
        <div className='d-flex justify-content-center mb-5'>
            <form onSubmit={handleonsubmit}>
                <div className="mb-3">
                    <input type="email" className="form-control p-2" id="exampleInputEmail1"
                        aria-describedby="emailHelp" value={user.email} disabled />

                </div>
                <div className="mb-3">
                    <input type="text" className="form-control p-2" id="exampleInputPassword1"
                        value={user.name} disabled />
                </div>
                <textarea onBlur={handlediscription} className="w-100 p-4" name="" id="" rows="5" placeholder='What is in your mind?'></textarea>
                <br />
                <div className="mb-3">
                    <input onBlur={handlerating} type="text" className="form-control p-2"
                        placeholder='Rate us ( 0 to 5)' />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Review;