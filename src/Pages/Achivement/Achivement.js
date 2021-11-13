import React from 'react';
import { Container } from 'react-bootstrap';
import './Achivement.css';


const Achievement = () => {
    return (
        <div className='achievement-custom ms-0'>

            <Container className='achievement-items mt-5 mb-5'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 text-color '>


                    <div className='col '>
                        <div className='Achievement-item text-center '>
                            <h2>Happy Client</h2><br />
                            <h3>800+</h3>
                        </div>
                    </div>


                    <div className="col ">
                        <div className='Achievement-item text-center '>
                            <h2>Experience</h2><br />
                            <h3>5+ year</h3>
                        </div>
                    </div>

                    <div className="col ">
                        <div className='Achievement-item text-center '>
                            <h2>Brand Collection</h2><br />
                            <h3>6</h3>
                        </div>
                    </div>

                    <div className="col ">
                        <div className='Achievement-item text-center '>
                            <h2>Total Show Room</h2><br />
                            <h3>8</h3>
                        </div>
                    </div>



                </div>
            </Container>



        </div>
    );
};

export default Achievement;