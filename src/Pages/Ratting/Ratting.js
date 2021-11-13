import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Ratting.css';
import Rating from 'react-rating';

const Ratting = () => {

    const [ratting, setRatting] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user/ratting')
            .then(res => res.json())
            .then(data => {
                setRatting(data);
            })
    }, [])

    console.log(ratting);

    return (
        <div>
            <Carousel className='m-3'>

                {ratting.map(item =>
                    <Carousel.Item> <div className='text-center mb-4'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png' height='50px'
                            width='50px' className='ratting-user-img' />
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <div className='ratting-star'>
                            <Rating
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                initialRating={item.rate}
                                readonly
                            />
                        </div>
                    </div>
                    </Carousel.Item>

                )}


            </Carousel>

        </div >
    );
};

export default Ratting;