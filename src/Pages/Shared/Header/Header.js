import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, handlesignout } = useAuth();
    const user_image = 'empty_image_field';
    //console.log(user.img);

    //console.log('print from header ', user);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark" className='mb-3 p-1 '>
                <Container>
                    <Link to="/home"><img className='brand-logo' src="https://cdnb.artstation.com/p/assets/covers/images/023/264/421/large/manohar-a-images-rr.jpg?1578632238" alt="" /></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={HashLink} to="/home" className='header-item'>Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/explore" className='header-item'>Explore</Nav.Link>


                        {user?.email ?
                            <>
                                <Nav.Link as={HashLink} to="/deshboard" className='header-item'>Deasboard</Nav.Link>
                                <Navbar.Text>
                                    <a href="#login">{user?.name}</a>
                                    <img className='header-image' src={user?.img || 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'} alt="" />
                                </Navbar.Text>
                                <button className='btn btn-danger' onClick={handlesignout}>SignOut</button>
                            </>
                            :
                            <Nav.Link as={HashLink} to="/login" className='header-item'>LogIn</Nav.Link>
                        }




                    </Navbar.Collapse>



                </Container>
            </Navbar>
        </>
    );
};

export default Header;