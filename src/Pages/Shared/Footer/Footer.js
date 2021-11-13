import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import footer1 from '../../../images/Footer/F1.png';
import footer2 from '../../../images/Footer/f2.png';
import footer3 from '../../../images/Footer/f3.jpg';
import footer4 from '../../../images/Footer/f4.png';
import useAuth from '../../Hooks/useAuth';

const Footer = () => {
    const { user, handlesignout } = useAuth();
    return (
        <div className='footer p-5'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3  text-white p-3'>

                <div className=' border border border-success p-3 overflow-auto col'>
                    <h3 className='mb-4 text-center'>Necessary Links</h3>
                    <p className='text-center'>
                        <Link to='/home' className='footer-link'>Home</Link><br />
                        <Link to="/explore" className='footer-link'>Explore</Link><br />
                        {user?.email && <div><Link to="/deshboard" className='footer-link'>Deshboard</Link><br /></div>}


                    </p>
                </div>

                <div className=' border border-success p-3 overflow-auto col'>
                    <h3 className='mb-4 text-center'>Address</h3>
                    <address className='text-center'>
                        Khagan, Birulia, Savar, Dhaka-1216
                        <br />
                        Cell: +880 1854-640476,
                        <br />
                        +880 1862-213214
                    </address>
                </div>
                <div className=' border border-success p-3 overflow-auto col'>
                    <h3 className='mb-4 text-center'>Payment</h3>

                    <div className='d-flex justify-content-center mb-3'>
                        <img className='footer-img me-2' src={footer1} alt="" />
                        <img className='footer-img' src={footer2} alt="" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img className='footer-img me-2' src={footer3} alt="" />
                        <img className='footer-img' src={footer4} alt="" />
                    </div>

                </div>
            </div>
            <h5 className='text-white text-center'>&copy; 2021 <a className='developer-name' href="https://www.facebook.com/?ref=tn_tnmn">Md Sajid Hasan</a></h5>
        </div>
    );
};

export default Footer;