import React from 'react';
import Achievement from '../../Achivement/Achivement';
import Ratting from '../../Ratting/Ratting';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Events from '../Events/Events';

const Index = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Events></Events>
            <Contact></Contact>
            <Ratting></Ratting>
        </div>
    );
};

export default Index;