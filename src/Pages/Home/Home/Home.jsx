import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroBoss from '../BistroBoss/BistroBoss';
import PopularMenu from '../PopularMenu/PopularMenu';
import Contact from '../Contact/Contact';
import Recommends from '../Recommends/Recommends';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    return (
        <div>
             <Helmet>
                <title> Bistro Boss ! Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;