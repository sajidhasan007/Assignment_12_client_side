import React from "react";
import { Placeholder } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (

        <div className='subscribe'>
            <div className='d-flex justify-content-center'>
                <div>
                    <div className='mb-5'>
                        <h2>Save time, save money!</h2>
                        <p>Sign up and we'll send the best deals to you</p>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* include validation with required or other standard HTML validation rules */}
                            <input className='py-2 px-3 border-rounded mb-2' {...register("exampleRequired", { required: true })} placeholder='Your email' />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className='py-2 px-3 ms-1 subscribe-input-submit' type="submit" value='Subscribe' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;