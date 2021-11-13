import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddEvent.css';

const AddEvent = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        console.log(data);


        fetch('http://localhost:5000/addevent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data.insertedId);
                if (data.insertedId) {
                    alert('You have booked successfully');
                    reset();
                }
            })


        //console.log(data);
        /*  axios.post('http://localhost:5000//addevent', data)
             .then(res => {
                 if (res.data.insertedId) {
                     alert('successfully inserter');
                 }
             }) */
    }
    return (
        <div>
            <div className='add-services'>
                <h1 className='text-center'>Please Add an <span className='event-name'>Bike</span></h1>
                <div className='form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("bike_name", { required: true, maxLength: 255 })} placeholder='Bike Name' />
                        <input {...register("bike_price", { required: true, maxLength: 255 })} placeholder='Bike Price' />
                        <input {...register("date", { required: true, maxLength: 255 })} placeholder='Disk Type' />
                        <input {...register("max_mamber", { required: true, maxLength: 255 })} placeholder='CC' />
                        <textarea {...register("description")} placeholder='Description' />
                        <input {...register("event_img")} placeholder='Image url' />
                        <input type="submit" className='btn btn-danger' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;